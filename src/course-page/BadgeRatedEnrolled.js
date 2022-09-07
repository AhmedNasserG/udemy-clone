import React from 'react';
import StarRatings from 'react-star-ratings';
import './BadgeRatedEnrolled.css';

const BadgeRatedEnrolled = ({ courseInfo }) => {
	return (
		<div className='badge-ratings-enrollment'>
			{courseInfo.isBestSeller && <span className='badge'>Bestseller</span>}
			<p className='course-rating-text'>{courseInfo.rating}</p>
			<StarRatings
				className='course-rating-stars'
				rating={courseInfo.rating}
				starDimension='14px'
				starSpacing='1px'
				starRatedColor='#f2ca8c'
			/>
			<span className='rates-count'>{courseInfo.ratesCount} ratings</span>
			<span className='enrolled-count'>
				{courseInfo.enrolledsCount} students
			</span>
		</div>
	);
};

BadgeRatedEnrolled.defaultProps = {
	courseInfo: {
		isBestSeller: true,
		rating: 4.4,
		ratesCount: '18,097',
		enrolledsCount: '191,375',
	},
};

export default BadgeRatedEnrolled;
