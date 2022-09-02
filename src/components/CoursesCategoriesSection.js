import React from 'react';
import './CoursesCategoriesSection.css';
import CoursesPanel from './CoursesPanel';
import TabContent from './tabs/TabContent';
import TabItem from './tabs/TabItem';

const CoursesSection = () => {
	return (
		<div className='courses-section'>
			<h1>A broad selection of courses</h1>
			<p>
				Choose from 185,000 online video courses with new additions published
				every month
			</p>
			<nav>
				<div className='nav' id='nav-tab' role='tablist'>
					<TabItem tabName='Python' active />
					<TabItem tabName='Web Development' />
					<TabItem tabName='JavaScript' />
					<TabItem tabName='Data Science' />
					<TabItem tabName='AWS Certification' />
					<TabItem tabName='Drawing' />
				</div>
			</nav>
			{/* TODO: fix tabs bug
			 * CourseSlider is not working properly when tabs are clicked
			 */}
			<div className='tab-content' id='nav-tabContent'>
				<TabContent tabName='Python' tabContent={<CoursesPanel />} active />
				<TabContent tabName='Web Development' tabContent={<CoursesPanel />} />
				<TabContent tabName='JavaScript' tabContent={<CoursesPanel />} />
				<TabContent tabName='Data Science' tabContent={<CoursesPanel />} />
				<TabContent tabName='AWS Certification' tabContent={<CoursesPanel />} />
				<TabContent tabName='Drawing' tabContent={<CoursesPanel />} />
			</div>
		</div>
	);
};

export default CoursesSection;
