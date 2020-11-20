import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';

export default function brandCard({ brand, index }) {
	return (
		<BrandCardStyles index={index}>
			<div className='brand-container'>
				<div className='container'>
					<div
						className={
							index % 2 === 1 ? ' brand-image-right' : 'brand-image-left'
						}
					>
						<div className='brand-info'>
							<h3>{brand.brandName}</h3>
							<p>{brand.brandInfo}</p>
						</div>
						<div className='brand-images'>
							{brand.brandImages.map((image, index) => (
								<Image key={index} fixed={image.asset.fixed} alt='store' />
							))}
						</div>
					</div>
				</div>
			</div>
		</BrandCardStyles>
	);
}

const BrandCardStyles = styled.div`
	.brand-container {
		background-color: ${({ index }) =>
			index % 2 === 0 ? 'var(--light-yellow)' : 'var(--white)'};
	}
	.brand-images {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-left: 1rem;
		grid-area: image;
	}

	.brand-info {
		padding-left: 1rem;
		grid-area: text;
	}

	.brand-image-left,
	.brand-image-right {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		padding: 3rem 0;
	}

	.brand-image-left {
		grid-template-areas: 'image text';
	}

	.brand-image-right {
		grid-template-areas: 'text image';
	}

	@media ${breakpoint.md} {
		.brand-container {
			flex-direction: column;
		}

		.brand-image-left,
		.brand-image-right {
			display: flex;
			flex-direction: column;
		}

		.brand-info {
			padding: 1rem 0;
		}
	}

	@media ${breakpoint.sm} {
		.brand-image-left,
		.brand-image-right {
			padding: 0;
			padding-bottom: 1rem;
		}
		.brand-images {
			margin-left: 0;
		}
	}
`;