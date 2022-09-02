import React from 'react';
import './TabItem.css';

const TabItem = ({ tabName, active }) => {
	return (
		<div>
			<button
				className={'tab-header' + (active ? ' active' : '')}
				id={`nav-${tabName.replaceAll(' ', '-')}-tab`}
				data-bs-toggle='tab'
				data-bs-target={`#nav-${tabName.replaceAll(' ', '-')}`}
				type='button'
				role='tab'
				aria-controls={`nav-${tabName.replaceAll(' ', '-')}`}
				aria-selected='true'
			>
				{tabName}
			</button>
		</div>
	);
};

export default TabItem;
