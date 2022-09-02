import React from 'react';

const TabContent = ({ tabName, tabContent, active }) => {
	return (
		<div
			className={'tab-pane fade ' + (active ? 'show active' : '')}
			id={`nav-${tabName.replaceAll(' ', '-')}`}
			role='tabpanel'
			aria-labelledby={`nav-${tabName.replaceAll(' ', '-')}-tab`}
		>
			{tabContent}
		</div>
	);
};

export default TabContent;
