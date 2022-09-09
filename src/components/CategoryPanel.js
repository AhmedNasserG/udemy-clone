import React, { useContext } from 'react';
import CoursesSlider from './CoursesSlider';
import './CategoryPanel.css';
import { CoursesContext } from '../App';

const CategoryPanel = ({ category }) => {
	const coursesData = useContext(CoursesContext);
	if (Object.keys(coursesData).length === 0) {
		return <p>Loading ...</p>;
	}
	const categoryCoursesInfoList = category.courses.map((courseId) => ({
		id: courseId,
		...coursesData[courseId].info,
	}));

	return (
		<div className='courses-container'>
			<h2>{category.title}</h2>
			<p className='category-description'>{category.description}</p>
			<button className='explore-button'>Explore {category.name}</button>
			<CoursesSlider courses={categoryCoursesInfoList} />
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
		courses: ['0', '1'],
	},
};

export default CategoryPanel;
