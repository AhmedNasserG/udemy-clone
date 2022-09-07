import React from 'react';
import ContentItem from './ContentItem';
import './ContentAccordion.css';

const ContentAccordion = ({ section }) => {
	console.log(section);
	return (
		<div className='accordion-item'>
			<h2
				className='accordion-header'
				id={`panelsStayOpen-heading${section.id}`}
			>
				<button
					className='accordion-header-button collapsed'
					data-bs-toggle='collapse'
					data-bs-target={`#panelsStayOpen-collapse${section.id}`}
					aria-expanded='false'
					aria-controls={`panelsStayOpen-collapse${section.id}`}
				>
					<img src='/icons/arrow.png' className='accordion-icon'></img>
					<div className='accordion-title'>{section.title}</div>
					<div className='accordion-subtitle'>{section.subtitle}</div>
				</button>
			</h2>
			<div
				id={`panelsStayOpen-collapse${section.id}`}
				className='accordion-collapse collapse'
				aria-labelledby={`panelsStayOpen-heading${section.id}`}
				data-bs-parent='#accordionpanelsStayOpenExample'
			>
				<div className='accordion-body'>
					<ul>
						{section.items.map((item) => (
							<ContentItem key={item.title} item={item} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

ContentAccordion.defaultProps = {
	section: {
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
};

export default ContentAccordion;
