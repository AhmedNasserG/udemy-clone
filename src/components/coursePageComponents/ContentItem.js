import React from 'react';
import './ContentItem.css';

const ContentItem = ({ item }) => {
	return (
		<li
			className={'course-content-item ' + (item.previewable && ' previewable')}
		>
			<img
				className='course-content-item-icon'
				src='/icons/play-button-sm.png'
			></img>
			<div className='course-content-item-title'>{item.title}</div>
			<div className='course-content-item-preview'>Preview</div>
			<div className='course-content-item-duration'>{item.duration}</div>
		</li>
	);
};

ContentItem.defaultProps = {
	item: {
		title: 'Introduction to programming',
		duration: '00:15',
		previewable: true,
	},
};

export default ContentItem;
