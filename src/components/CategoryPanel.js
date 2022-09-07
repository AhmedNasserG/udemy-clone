import React from 'react';
import CoursesSlider from './CoursesSlider';
import './CategoryPanel.css';

const CategoryPanel = ({ category }) => {
	return (
		<div className='courses-container'>
			<h2>{category.title}</h2>
			<p className='category-description'>{category.description}</p>
			<button className='explore-button'>Explore {category.name}</button>
			<CoursesSlider courses={category.courses} />
		</div>
	);
};

// for testing purposes
CategoryPanel.defaultProps = {
	category: {
		name: 'Python',
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
				id: 6,
				image: 'https://s.udemycdn.com/premium-clp/567828/CourseImage-2x.jpg',
				title: 'python from zero to hero',
				instructor: 'maximlian',
				rating: 3.4,
				studentCount: 4329,
				price: '$119.99',
				bestSeller: true,
			},
			{
				id: 7,
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
				id: 8,
				image: 'https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg',
				title: 'Learn Python: Python for Beginners',
				instructor: 'Abrar Hussain',
				rating: 2.1,
				studentCount: 4100,
				price: '$100',
				bestSeller: false,
			},
			{
				id: 9,
				image: 'https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg',
				title: 'Learn Python for Data Analysis and Visualization',
				instructor: 'Jose Portila',
				rating: 4.2,
				studentCount: 4020,
				price: '$39.99',
				bestSeller: true,
			},
			{
				id: 10,
				image: 'https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg',
				title: 'Python for Beginners - Learn Programming from scratch',
				instructor: 'Edwin Diaz, Coding Faculty',
				rating: 4.5,
				studentCount: 1042,
				price: '$49.99',
				bestSeller: false,
			},
		],
	},
};

export default CategoryPanel;
