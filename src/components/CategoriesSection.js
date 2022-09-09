import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CategoryPanel from './CategoryPanel';
import './CategoriesSection.css';
import { CoursesContext } from '../contexts/CoursesContext';

const filterCourses = (coursesData, searchTerm) => {
	const filteredCourses = Object.keys(coursesData).filter((courseId) =>
		coursesData[courseId].info.name
			.toLowerCase()
			.includes(searchTerm.toLowerCase())
	);
	return filteredCourses;
};

const CategoriesSection = ({ categories }) => {
	const [searchParams, _setSearchParams] = useSearchParams();
	const searchTerm = searchParams.get('search-term');
	const CoursesCTX = useContext(CoursesContext);
	if (CoursesCTX.loading) {
		return <div>Loading...</div>;
	} else if (CoursesCTX.error) {
		return <div>Error: {CoursesCTX.error}</div>;
	}
	return (
		<div className='courses-section'>
			<h1>A broad selection of courses</h1>
			<p>
				Choose from 185,000 online video courses with new additions published
				every month
			</p>
			<Tabs>
				<TabList className={'tab-header'}>
					{searchTerm !== null && (
						<Tab className={'tab-header-item'}>Search results</Tab>
					)}
					{categories.map((category) => (
						<Tab key={category.name} className={'tab-header-item'}>
							{category.name}
						</Tab>
					))}
				</TabList>

				{searchTerm !== null && (
					<TabPanel>
						<CategoryPanel
							category={{
								title: 'Search results',
								description: `Search results for ${searchTerm}`,
								courses: filterCourses(CoursesCTX.data, searchTerm),
							}}
						/>
					</TabPanel>
				)}

				{categories.map((category) => (
					<TabPanel key={category.name}>
						<CategoryPanel category={category} />
					</TabPanel>
				))}
			</Tabs>
		</div>
	);
};

CategoriesSection.defaultProps = {
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

export default CategoriesSection;
