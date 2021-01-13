import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BrandsList from '../components/brand/BrandsList';
import SectionTitle from '../components/SectionTitle';
import { breakpoint } from '../styles/breakpoints';
import SEO from '../components/SEO';

export const data = graphql`
  {
    storeInfo: allSanityWinkel {
      nodes {
        id
        winkel {
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
    }
    brands: allSanityBrands(sort: { fields: brandName, order: ASC }) {
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
  console.log(data.brands.nodes);
  const brands = data.brands.nodes.map((brand) => brand.brandName);
  return (
    <>
      <SEO title='Merken' keywords={brands} />
      <MerkenStyles>
        <SectionTitle title='Onze Merken' bgColor='var(--light-yellow)' />
        <BrandsList data={data} />
      </MerkenStyles>
    </>
  );
}

const MerkenStyles = styled.div`
  margin-top: 100px;

  @media ${breakpoint.sm} {
    margin-top: 0;
  }
`;
