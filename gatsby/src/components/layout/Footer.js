import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { breakpoint } from '../../styles/breakpoints';
import StoreContact from '../store/StoreContact';
import SocialLinks from '../nav/SocialLinks';
import StoreHours from '../store/StoreHours';
import WwwHTHmedia from '../../assets/images/icons/WwwHTH.nl';

export default function Footer({ footerInfo }) {
  const currentYear = new Date().getFullYear();
  const [{ winkel }] = footerInfo.nodes;
  const {
    contactInfo,
    storeHours,
    socialMediaData,
    storeName,
    slogan,
  } = winkel;

  return (
    <FooterStyles>
      <div className='container'>
        <div className='footer'>
          <div className='contact'>
            <StoreContact contact={{ contactInfo, storeName, slogan }} />
          </div>
          <div className='social'>
            <SocialLinks links={socialMediaData} />
          </div>
          <div className='store-hours'>
            <StoreHours storeHours={storeHours} />
          </div>
        </div>
        <div className='copyright'>
          <Link to='/privacy'>Privacy verklaring</Link>
          <p className=''>
            &copy; Het Arendshuys&nbsp;<span>• {currentYear}</span>
          </p>
          <a href='https://www.hth.media'>
            <WwwHTHmedia
              color={`var(--light-yellow)`}
              hoverColor={`var(--yellow)`}
            />
          </a>
        </div>
      </div>
    </FooterStyles>
  );
}

const FooterStyles = styled.footer`
  background-color: var(--blue);
  padding: 3rem 0;

  .footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    .social {
      margin: auto;
      width: 20%;
    }
  }
  .copyright {
    color: var(--light-yellow);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    letter-spacing: 1px;

    a {
      margin: 0.5rem 0;
      color: var(--light-yellow);
      font-size: 0.8rem;

      &:hover {
        color: var(--yellow);
      }
    }

    img {
      width: 25px;
      height: 25px;
      margin: 0 0.5rem;
    }
  }

  @media ${breakpoint.sm} {
    .footer {
      flex-direction: column;
      align-items: center;

      .social {
        margin: 2rem 0;
        width: 50%;
      }
    }
  }
`;
