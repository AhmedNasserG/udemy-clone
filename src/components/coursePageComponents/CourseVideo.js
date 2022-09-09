import React from 'react';
import './CourseVideo.css';

const CourseVideo = ({ imgSrc }) => {
	return (
		<div className='course-video'>
			<div className='img-overlay'>
				<img className='course-video-img' src={imgSrc}></img>
			</div>
			<img className='course-video-icon' src='/icons/play-button.png'></img>
		</div>
	);
};

CourseVideo.defaultProps = {
	imgSrc: 'https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg',
};

export default CourseVideo;
