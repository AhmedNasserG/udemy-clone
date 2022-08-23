import React from 'react';
import StarRatings from 'react-star-ratings';

import './CourseCard.css';

const CourseCard = (props) => {
	return (
		<div className="course-card">
			<img src={props.course.image} alt={props.course.title} className="course-img"></img>
			<div className="course-card-body">
				<p className="course-title">{props.course.title}</p>
				<p className="course-subtitle">{props.course.instructor}</p>
				<div className="course-rating">
					<p className="course-rating-text">{props.course.rating}</p>
					<StarRatings
						rating={props.course.rating}
						starDimension="14px"
						starSpacing="1px"
						starRatedColor="#E59719"
					/>
					<p className="course-student-count">({props.course.studentCount})</p>
				</div>
				<p className="course-price">{props.course.price}</p>

				{props.course.bestSeller ? (
					<div className="best-seller">
						{' '}
						<p className="best-seller-text">Bestseller</p>
					</div>
				) : null}
			</div>
		</div>
	);
};

// for testing purposes
CourseCard.defaultProps = {
	course: {
		image: 'https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg',
		title: 'Course Title',
		instructor: 'Instructor',
		rating: 4.5,
		studentCount: 100,
		price: '$100',
		bestSeller: true,
	},
};

export default CourseCard;
