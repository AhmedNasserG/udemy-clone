import React, { useContext } from 'react';
import CategoriesSection from './CategoriesSection';
import TopCategories from './TopCategories';
import './Home.css';
import { CategoriesContext } from '../contexts/CategoriesContext';
import HandleLoading from './HandleLoading';
import { CoursesContext } from '../contexts/CoursesContext';

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
