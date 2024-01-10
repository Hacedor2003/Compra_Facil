import { useState } from 'react';

export const Valoracion = ({ rating }) => {
	const [valoracion, setValoracion] = useState(rating);

	const handleStarClick = (value) => {
		setValoracion(value);
	};

	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;

				return (
					<span key={i}>
						<label
							role='img'
							aria-label='star'
							onClick={() => handleStarClick(ratingValue)}>
							{ratingValue <= valoracion ? '⭐️' : '☆'}
						</label>
					</span>
				);
			})}
		</div>
	);
};
