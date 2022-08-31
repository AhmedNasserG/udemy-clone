import React from 'react';
import CardsSlider from './CardsSlider';
import Navbar from './Navbar';
import TopCategories from './TopCategories';

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<CardsSlider />
			<TopCategories />
		</div>
	);
};

export default Home;
