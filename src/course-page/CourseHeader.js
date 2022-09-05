import React from 'react';
import SideMenu from './SideMenu';
import CourseVideo from './CourseVideo';
import StickyInfoBar from './StickyInfoBar';
import BadgeRatedEnrolled from './BadgeRatedEnrolled';
import CourseBreadcrumb from './CourseBreadcrumb';
import './CourseHeader.css';

const CourseHeader = ({
	courseName,
	courseDecription,
	courseCreators,
	courseLastUpdate,
	courseLanguage,
	courseCaption,
	coursePrice,
}) => {
	return (
		<div>
			<StickyInfoBar />
			<div className='course-header'>
				<div className='course-header-content'>
					<CourseBreadcrumb />
					<div className='min-screen'>
						<CourseVideo />
					</div>
					<div className='course-name'>{courseName}</div>
					<div className='course-description'>{courseDecription}</div>
					<BadgeRatedEnrolled />
					<div className='creators-section'>
						Created by{' '}
						{courseCreators.map((creator) => (
							<>
								<span key={creator} className='creators-name'>
									{creator}
								</span>{' '}
							</>
						))}
					</div>
					<div className='course-meta'>
						<div>
							<img src='/icons/caution.png' className='meta-icon'></img>
							<span className='meta-info'>{courseLastUpdate}</span>
						</div>
						<div>
							<img src='/icons/language.png' className='meta-icon'></img>
							<span className='meta-info'>{courseLanguage}</span>
						</div>
						<div>
							<img src='/icons/close-caption.png' className='meta-icon'></img>
							<span className='meta-info'>{courseCaption}</span>
						</div>
					</div>
					<div className='min-screen'>
						<div className='course-header-content-course-price '>
							{coursePrice}
						</div>
						<button className='course-header-content-course-add-to-cart'>
							Add to cart
						</button>
						<div className='course-header-content-subtitle'>
							30-Day Money-Back Guarantee
						</div>
						<div className='course-header-content-subtitle'>
							Full Lifetime Access
						</div>
						<div className='course-actions'>
							<div>Share</div>
							<div>Gift this course</div>
							<div>Apply Coupon</div>
						</div>
					</div>
				</div>
				<div className='side-menu max-screen'>
					<SideMenu />
				</div>
			</div>
		</div>
	);
};

CourseHeader.defaultProps = {
	courseName: 'Learn Python: The Complete Python Programming Course',
	courseDecription:
		'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
	courseCreators: ['Avinash Jain', 'The Codex'],
	courseLastUpdate: 'Last updated 9/2015',
	courseLanguage: 'English',
	courseCaption: 'English',
	coursePrice: 'E£679.99',
};

export default CourseHeader;
