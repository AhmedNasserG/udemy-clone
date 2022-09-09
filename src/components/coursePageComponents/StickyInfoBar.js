import React from 'react';
import BadgeRatedEnrolled from './BadgeRatedEnrolled';
import './StickyInfoBar.css';

const StickyInfoBar = ({ courseInfo }) => {
	return (
		<div className='sticky-info-bar'>
			<div>
				<div className='sticky-info-bar-course-name'>
					{courseInfo.courseName}
				</div>
				<BadgeRatedEnrolled courseInfo={courseInfo} />
			</div>
			<div className='sticky-info-bar-course-price min-screen'>
				{courseInfo.coursePrice}
			</div>
			<button className='sticky-info-bar-course-buy min-screen'>Buy now</button>
		</div>
	);
};

StickyInfoBar.defaultProps = {
	courseInfo: {
		courseName: 'Python for Beginners - Learn Programming from scratch',
		coursePrice: 'E£679.99',
	},
};

export default StickyInfoBar;
