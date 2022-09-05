import React from 'react';
import './CourseBreadcrumb.css';
const CourseBreadcrumb = ({ coursePath }) => {
	return (
		<nav className='course-path' aria-label='breadcrumb'>
			<ol className='breadcrumb'>
				{coursePath.map((element) => (
					<li key={element} className='breadcrumb-item'>
						{element}
					</li>
				))}
			</ol>
		</nav>
	);
};

CourseBreadcrumb.defaultProps = {
	coursePath: ['Development', 'Programming Languages', 'Python'],
};

export default CourseBreadcrumb;
