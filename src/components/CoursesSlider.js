import React from 'react';
import CourseCard from './CourseCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 3000, min: 1368 },
		items: 5,
		slidesToSlide: 5,
	},
	desktop: {
		breakpoint: { max: 1368, min: 1098 },
		items: 4,
		slidesToSlide: 4,
	},
	tablet: {
		breakpoint: { max: 1098, min: 844 },
		items: 3,
		slidesToSlide: 3,
	},
	mobile: {
		breakpoint: { max: 944, min: 593 },
		items: 2,
		slidesToSlide: 2,
	},
	mobile1: {
		breakpoint: { max: 593, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

const CoursesSlider = ({ courses }) => {
	return (
		<Carousel responsive={responsive}>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</Carousel>
	);
};

export default CoursesSlider;
