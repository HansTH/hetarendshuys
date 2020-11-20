import React from 'react';
import { graphql } from 'gatsby';
import StoreNews from '../components/store/StoreNews';
import SectionTitle from '../components/SectionTitle';
import styled from 'styled-components';
import { breakpoint } from '../styles/breakpoints';

export const query = graphql`
	query {
		storeNews: allSanityNews(sort: { fields: newsDate, order: DESC }) {
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
						fixed(height: 250, width: 250) {
							...GatsbySanityImageFixed
						}
					}
				}
			}
		}
	}
`;

export default function nieuws({ data }) {
	return (
		<NieuwsStyles>
			<SectionTitle title='Nieuws' bgColor='#FCF7EF'>
				<StoreNews storeNews={data.storeNews} />
			</SectionTitle>
		</NieuwsStyles>
	);
}

const NieuwsStyles = styled.div`
	margin-top: '100px';

	@media ${breakpoint.sm} {
		margin-top: 0;
	}
`;