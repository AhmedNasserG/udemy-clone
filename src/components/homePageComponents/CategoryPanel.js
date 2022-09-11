import React, { useContext } from 'react';
import CoursesSlider from './CoursesSlider';
import './CategoryPanel.css';
import { CoursesContext } from '../../contexts/CoursesContext';

const CategoryPanel = ({ category }) => {
	const CoursesCTX = useContext(CoursesContext);

	return (
		<div className='courses-container'>
			<h2>{category.title}</h2>
			<p className='category-description'>{category.description}</p>
			{category.name && (
				<button className='explore-button'>Explore {category.name}</button>
			)}
			<CoursesSlider
				courses={category.courses.map((courseId) => ({
					id: courseId,
					...CoursesCTX.data[courseId].info,
				}))}
			/>
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
