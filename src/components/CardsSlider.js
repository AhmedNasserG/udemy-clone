import React from 'react';
import CourseCard from './CourseCard';
import Carousel from 'react-multi-carousel';
import './CardsSlider.css';
import './CourseCard.css';
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

const CardsSlider = ({ title, description, courses }) => {
	return (
		<div className='courses-container'>
			<h2>{title}</h2>
			<p className='category-description'>{description}</p>
			<button className='explore-button'>Explore Python</button>
			<div className='cards-slider'>
				<Carousel
					responsive={responsive}
					containerClass='cards-slider'
					itemClass='course-card'
				>
					{courses.map((course) => (
						<CourseCard key={course.id} course={course} />
					))}
				</Carousel>
			</div>
		</div>
	);
};

// for testing purposes
CardsSlider.defaultProps = {
	title: 'Expand your career opportunities with Python',
	description: `Take one of Udemy’s range of Python courses and learn how to code using this incredibly
	      useful language. Its simple syntax and readability makes Python perfect for Flask, Django,
				data science, and machine learning. You’ll learn how to build everything from games to sites
				to apps. Choose from a range of courses that will appeal to ...`,
	courses: [
		{
			id: 1,
			image: 'https://s.udemycdn.com/premium-clp/567828/CourseImage-2x.jpg',
			title: 'python from zero to hero',
			instructor: 'maximlian',
			rating: 3.4,
			studentCount: 4329,
			price: '$119.99',
			bestSeller: true,
		},
		{
			id: 2,
			image:
				'https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg',
			title: 'javascript from zero to hero',
			instructor: 'stephen',
			rating: 4.7,
			studentCount: 1500,
			price: '$99.99',
			bestSeller: true,
		},
		{
			id: 3,
			image: 'https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg',
			title: 'Learn Python: Python for Beginners',
			instructor: 'Abrar Hussain',
			rating: 2.1,
			studentCount: 4100,
			price: '$100',
			bestSeller: false,
		},
		{
			id: 4,
			image: 'https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg',
			title: 'Learn Python for Data Analysis and Visualization',
			instructor: 'Jose Portila',
			rating: 4.2,
			studentCount: 4020,
			price: '$39.99',
			bestSeller: true,
		},
		{
			id: 5,
			image: 'https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg',
			title: 'Python for Beginners - Learn Programming from scratch',
			instructor: 'Edwin Diaz, Coding Faculty',
			rating: 4.5,
			studentCount: 1042,
			price: '$49.99',
			bestSeller: false,
		},
		{
			id: 1,
			image: 'https://s.udemycdn.com/premium-clp/567828/CourseImage-2x.jpg',
			title: 'python from zero to hero',
			instructor: 'maximlian',
			rating: 3.4,
			studentCount: 4329,
			price: '$119.99',
			bestSeller: true,
		},
		{
			id: 2,
			image:
				'https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg',
			title: 'javascript from zero to hero',
			instructor: 'stephen',
			rating: 4.7,
			studentCount: 1500,
			price: '$99.99',
			bestSeller: true,
		},
		{
			id: 3,
			image: 'https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg',
			title: 'Learn Python: Python for Beginners',
			instructor: 'Abrar Hussain',
			rating: 2.1,
			studentCount: 4100,
			price: '$100',
			bestSeller: false,
		},
		{
			id: 4,
			image: 'https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg',
			title: 'Learn Python for Data Analysis and Visualization',
			instructor: 'Jose Portila',
			rating: 4.2,
			studentCount: 4020,
			price: '$39.99',
			bestSeller: true,
		},
		{
			id: 5,
			image: 'https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg',
			title: 'Python for Beginners - Learn Programming from scratch',
			instructor: 'Edwin Diaz, Coding Faculty',
			rating: 4.5,
			studentCount: 1042,
			price: '$49.99',
			bestSeller: false,
		},
	],
};

export default CardsSlider;
