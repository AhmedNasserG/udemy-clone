import React from 'react';

const TabItem = ({ tabName, active }) => {
	return (
		<div>
			<button
				className={'category ' + (active ? 'active' : '')}
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
