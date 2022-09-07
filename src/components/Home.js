import React from 'react';
import CategoriesSection from './CategoriesSection';
import TopCategories from './TopCategories';
import './Home.css';

const Home = ({ categories }) => {
	return (
		<div className='home'>
			<header className='home-header'>
				<div className='header-card'>
					<h1>24-Hour Flash Sale</h1>
					Learn valuable, practical skills for less. Log in to see deals on
					courses. Sale ends tonight!
				</div>
			</header>
			<CategoriesSection categories={categories} />
			<TopCategories />
		</div>
	);
};

Home.defaultProps = {
	categories: [
		{
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
			],
		},
		{
			name: 'Web Development',
			title: 'Expand your career opportunities with WEB DEV',
			description: `Take one of Udemy’s range of WEB courses and learn how to code using this incredibly
	      useful language. Its simple syntax and readability makes Python perfect for Flask, Django,
				data science, and machine learning. You’ll learn how to build everything from games to sites
				to apps. Choose from a range of courses that will appeal to ...`,
			courses: [
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
			],
		},
	],
};

export default Home;
