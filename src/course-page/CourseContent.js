import React, { useState } from 'react';
import ContentAccordion from './ContentAccordion';
import './CourseContent.css';

const MAX_COUNT_SECTIONS = 10;

const CourseContent = ({ content }) => {
	const [sectionsExpanded, setSectionsExpanded] = useState(false);
	const [showMore, setShowMore] = useState(false);
	const toggleSectionsExpanded = () => {
		if (!sectionsExpanded) {
			setSectionsExpanded(true);
			document
				.querySelectorAll('.accordion-header-button.collapsed')
				.forEach((button) => {
					button.click();
				});
		} else {
			setSectionsExpanded(false);
			document
				.querySelectorAll('.accordion-header-button:not(.collapsed)')
				.forEach((button) => {
					button.click();
				});
		}
	};
	const clickShowMore = () => {
		setShowMore(true);
		document.querySelector('.more-sections-button').style.display = 'none';
	};

	return (
		<>
			<div className='course-content-info'>
				<div>{`${content.sectionsCount} sections •`}</div>
				<div>{`${content.lecturesCount} lectures •`}</div>
				<div>{`${content.totalDuration} total length`}</div>
				<button className='expand-all' onClick={toggleSectionsExpanded}>
					{sectionsExpanded ? 'Collapse all sections' : 'Expand all sections'}
				</button>
			</div>
			<div className='accordion accordion-flush' id='accordionFlushExample'>
				{(showMore
					? content.sections
					: content.sections.slice(0, MAX_COUNT_SECTIONS)
				).map((section) => (
					<ContentAccordion key={section.id} section={section} />
				))}
			</div>
			{content.sections.length > MAX_COUNT_SECTIONS && (
				<button className='more-sections-button' onClick={clickShowMore}>
					{`${content.sections.length - MAX_COUNT_SECTIONS} more sections`}
				</button>
			)}
		</>
	);
};

CourseContent.defaultProps = {
	content: {
		sectionsCount: 6,
		lecturesCount: 42,
		totalDuration: '2h 36m',
		sections: [
			{
				id: '1',
				title: 'Programming fundamentals',
				subtitle: '10 lectures • 40min',
				items: [
					{
						title: 'Introduction to programming',
						duration: '00:15',
						previewable: true,
					},
					{
						title: 'What is programming?',
						duration: '03:10',
						previewable: false,
					},
				],
			},
			{
				id: '2',
				title: 'Getting started with Python',
				subtitle: '5 lectures • 15min',
				items: [
					{
						title: 'Intro to getting started with Python',
						duration: '10:15',
						previewable: false,
					},
					{
						title: 'What is Python?',
						duration: '04:23',
						previewable: false,
					},
				],
			},
		],
	},
};

export default CourseContent;
