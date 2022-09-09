import React, { useContext } from 'react';
import CategoriesSection from '../components/homePageComponents/CategoriesSection';
import TopCategories from '../components/homePageComponents/TopCategories';
import HandleLoading from '../components/HandleLoading';
import { CategoriesContext } from '../contexts/CategoriesContext';
import { CoursesContext } from '../contexts/CoursesContext';
import './Home.css';

const Home = () => {
	const CategoriesCTX = useContext(CategoriesContext);
	const CoursesCTX = useContext(CoursesContext);
	return (
		<div className='home'>
			<header className='home-header'>
				<div className='header-card'>
					<h1>24-Hour Flash Sale</h1>
					Learn valuable, practical skills for less. Log in to see deals on
					courses. Sale ends tonight!
				</div>
			</header>
			<HandleLoading CTX={CategoriesCTX}>
				<HandleLoading CTX={CoursesCTX}>
					<CategoriesSection categories={CategoriesCTX.data} />
				</HandleLoading>
			</HandleLoading>
			<TopCategories />
		</div>
	);
};

export default Home;
