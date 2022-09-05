import React from 'react';
import StarRatings from 'react-star-ratings';
import './BadgeRatedEnrolled.css';

const BadgeRatedEnrolled = ({
	isBestSeller,
	rating,
	ratesCount,
	enrolledsCount,
}) => {
	return (
		<div className='badge-ratings-enrollment'>
			{isBestSeller && <span className='badge'>Bestseller</span>}
			<p className='course-rating-text'>{rating}</p>
			<StarRatings
				className='course-rating-stars'
				rating={rating}
				starDimension='14px'
				starSpacing='1px'
				starRatedColor='#f2ca8c'
			/>
			<span className='rates-count'>{ratesCount} ratings</span>
			<span className='enrolled-count'>{enrolledsCount} students</span>
		</div>
	);
};

BadgeRatedEnrolled.defaultProps = {
	isBestSeller: true,
	rating: 4.4,
	ratesCount: '18,097',
	enrolledsCount: '191,375',
};

export default BadgeRatedEnrolled;
