import React, { useContext } from 'react';
import CategoriesSection from './CategoriesSection';
import TopCategories from './TopCategories';
import './Home.css';
import { CategoriesContext } from '../contexts/CategoriesContext';

const Home = () => {
	const CategoriesCTX = useContext(CategoriesContext);
	return (
		<div className='home'>
			<header className='home-header'>
				<div className='header-card'>
					<h1>24-Hour Flash Sale</h1>
					Learn valuable, practical skills for less. Log in to see deals on
					courses. Sale ends tonight!
				</div>
			</header>
			{CategoriesCTX.loading && <div className='loading'>Loading...</div>}
			{CategoriesCTX.error && (
				<div className='error'>Error: {CategoriesCTX.error}</div>
			)}
			{CategoriesCTX.data && (
				<CategoriesSection categories={CategoriesCTX.data} />
			)}

			<TopCategories />
		</div>
	);
};

export default Home;
