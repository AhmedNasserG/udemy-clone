import React from 'react';
import BadgeRatedEnrolled from './BadgeRatedEnrolled';
import './StickyInfoBar.css';

const StickyInfoBar = ({ courseName, coursePrice }) => {
	return (
		<div className='sticky-info-bar'>
			<div>
				<div className='sticky-info-bar-course-name'>{courseName}</div>
				<BadgeRatedEnrolled />
			</div>
			<div className='sticky-info-bar-course-price min-screen'>
				{coursePrice}
			</div>
			<button className='sticky-info-bar-course-buy min-screen'>Buy now</button>
		</div>
	);
};

StickyInfoBar.defaultProps = {
	courseName: 'Python for Beginners - Learn Programming from scratch',
	coursePrice: 'E£679.99',
};

export default StickyInfoBar;
