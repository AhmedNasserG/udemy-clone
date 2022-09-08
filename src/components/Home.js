import React, { useContext } from 'react';
import CategoriesSection from './CategoriesSection';
import TopCategories from './TopCategories';
import { CategoriesContext } from '../App';
import './Home.css';

const Home = () => {
	const categories = useContext(CategoriesContext);
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

export default Home;
