import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BrandsList from '../components/brand/BrandsList';
import SectionTitle from '../components/SectionTitle';
import { breakpoint } from '../styles/breakpoints';

export const data = graphql`
	{
		storeInfo: allSanityStore {
			nodes {
				id
				storeInfo
				storeImages {
					asset {
						id
						fixed(height: 150, width: 250) {
							...GatsbySanityImageFixed
						}
					}
				}
			}
		}
		brands: allSanityBrands {
			nodes {
				id
				brandName
				brandInfo
				slug {
					current
				}
				brandImages {
					asset {
						fixed(height: 150, width: 250) {
							...GatsbySanityImageFixed
						}
					}
				}
			}
		}
	}
`;

export default function merken({ data }) {
	return (
		<MerkenStyles>
			<SectionTitle title='Onze Merken' bgColor={`var(--white)`} />
			<BrandsList data={data} />
		</MerkenStyles>
	);
}

const MerkenStyles = styled.div`
	margin-top: 100px;

	@media ${breakpoint.sm} {
		margin-top: 0;
	}
`;