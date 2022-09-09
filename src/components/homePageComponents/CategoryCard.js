import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ categoryName, imgSrc }) => {
	return (
		<div className='col-lg-3 col-md-4 col-sm-12'>
			<div className='category-card'>
				<div className='category-card-img-container'>
					<img src={imgSrc} alt={categoryName} className='category-card-img' />
				</div>
				<span className='category-card-body'>{categoryName}</span>
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
