import React from 'react';
import StarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
	// TODO: fix navigating to mid of the course page
	// TODO: fix styling of the course card
	const { id, img, name, creators, rating, ratesCount, price, isBestSeller } =
		course;
	const navigate = useNavigate();
	return (
		<div
			className='course-card'
			onClick={() => {
				navigate(`course/${id}`);
			}}
		>
			<img src={img} alt={name} className='course-img'></img>
			<div className='course-card-body'>
				<p className='course-title'>{name}</p>
				<p className='course-subtitle'>{creators}</p>
				<div className='course-rating'>
					<p className='course-rating-text'>{rating}</p>
					<StarRatings
						rating={rating}
						starDimension='14px'
						starSpacing='1px'
						starRatedColor='#E59719'
					/>
					<p className='course-student-count'>({ratesCount})</p>
				</div>
				<p className='course-price'>{price}</p>

				{isBestSeller && (
					<div className='best-seller'>
						<p className='best-seller-text'>Bestseller</p>
					</div>
				)}
			</div>
		</div>
	);
};

// for testing purposes
CourseCard.defaultProps = {
	course: {
		img: 'https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg',
		name: 'Course Name',
		creators: ['Instructor'],
		rating: 4.5,
		ratesCount: 100,
		price: '$100',
		isBestSeller: true,
	},
};

export default CourseCard;
