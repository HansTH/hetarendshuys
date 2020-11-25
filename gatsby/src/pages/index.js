import React, { useState } from 'react';
import { graphql } from 'gatsby';
import BrandLogo from '../components/brand/BrandLogo';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import StoreInfo from '../components/store/StoreInfo';
import StoreNews from '../components/store/StoreNews';

export const data = graphql`
	{
		storeInfo: allSanityStore {
			nodes {
				id
				storeInfo
				storeName
				smallStoreImg: storeImages {
					asset {
						id
						fixed(width: 250, height: 250) {
							...GatsbySanityImageFixed
						}
					}
				}
				largeStoreImg: storeImages {
					asset {
						id
						fluid(maxWidth: 1200) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
		storeNews: allSanityNews(
			sort: { fields: newsDate, order: DESC }
			limit: 2
		) {
			nodes {
				id
				newsDate
				newsText
				newsTitle
				slug {
					current
				}
				newsImage {
					asset {
						fixed(width: 250, height: 250) {
							...GatsbySanityImageFixed
						}
					}
				}
			}
		}
		storeBrands: allSanityBrands {
			nodes {
				id
				brandName
				slug {
					current
				}
			}
		}
	}
`;

export default function Home({ data }) {
	const imageArray = data.storeInfo.nodes[0].largeStoreImg;
	const bgImg = randomIndex(imageArray);
	const [bgImage, setBgImage] = useState(bgImg);

	function randomIndex(a) {
		return a[Math.floor(Math.random() * a.length)];
	}

	function handleBgImage(bgImage) {
		setBgImage(bgImage);
	}

	return (
		<>
			<Header bgImage={bgImage.asset.fluid} />
			<SectionTitle
				title={data.storeInfo.nodes[0].storeName}
				bgColor='var(--light-yellow)'
			>
				<StoreInfo data={data} handleBgImage={handleBgImage} />
			</SectionTitle>
			<SectionTitle title='Onze Merken' bgColor='var(--blue)'>
				<BrandLogo storeBrands={data.storeBrands} />
			</SectionTitle>
			<SectionTitle
				title='Laatste Nieuws'
				bgColor='var(--light-yellow)'
				id='laatste-nieuws'
			>
				<StoreNews storeNews={data.storeNews} disableLink={false} />
			</SectionTitle>
		</>
	);
}
