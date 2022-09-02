import React from 'react';
import CoursesCategoriesSection from './CoursesCategoriesSection';
import TopCategories from './TopCategories';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<CoursesCategoriesSection />
			<TopCategories />
		</div>
	);
};

export default Home;
