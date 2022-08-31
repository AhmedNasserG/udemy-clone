import React from 'react';
import CategoryCard from './CategoryCard';
import './TopCategories.css';

const TopCategories = ({ categories }) => {
	return (
		<div>
			<p className='section-title'>Top Categories</p>

			<div className='row row-cols-4'>
				{categories.map((category) => (
					<CategoryCard
						key={category.name}
						categoryName={category.name}
						imgSrc={category.img}
					/>
				))}
			</div>
		</div>
	);
};

TopCategories.defaultProps = {
	categories: [
		{
			name: 'Design',
			img: 'https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg',
		},
		{
			name: 'Development',
			img: 'https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg',
		},
		{
			name: 'Marketing',
			img: 'https://s.udemycdn.com/home/top-categories/lohp-category-marketing-2x-v2.jpg',
		},
		{
			name: 'IT and Sofware',
			img: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg',
		},
		{
			name: 'Personal Development',
			img: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg',
		},
		{
			name: 'Business',
			img: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-2x-v2.jpg',
		},
		{
			name: 'Photography',
			img: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography-2x-v2.jpg',
		},
		{
			name: 'Music',
			img: 'https://s.udemycdn.com/home/top-categories/lohp-category-music-2x-v2.jpg',
		},
	],
};

export default TopCategories;
