import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ categoryName, imgSrc }) => {
	return (
		<div class='col-lg-3 col-md-4 col-sm-12'>
			<div class='category-card'>
				<div class='category-card-img-container'>
					<img src={imgSrc} alt={categoryName} class='category-card-img' />
				</div>
				<span class='category-card-body'>{categoryName}</span>
			</div>
		</div>
	);
};

// for testing purposes
CategoryCard.defaultProps = {
	categoryName: 'Python',
	imgSrc:
		'https://s.udemycdn.com/home/top-categories/lohp-category-photography-2x-v2.jpg',
};

export default CategoryCard;
