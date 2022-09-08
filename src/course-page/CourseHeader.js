import React from 'react';
import SideMenu from './SideMenu';
import CourseVideo from './CourseVideo';
import StickyInfoBar from './StickyInfoBar';
import BadgeRatedEnrolled from './BadgeRatedEnrolled';
import CourseBreadcrumb from './CourseBreadcrumb';
import './CourseHeader.css';

const CourseHeader = ({ courseInfo }) => {
	return (
		<div>
			<StickyInfoBar courseInfo={courseInfo} />
			<div className='course-header'>
				<div className='course-header-content'>
					<CourseBreadcrumb coursePath={courseInfo.path} />
					<div className='min-screen'>
						<CourseVideo imgSrc={courseInfo.img} />
					</div>
					<div className='course-name'>{courseInfo.name}</div>
					<div className='course-description'>{courseInfo.decription}</div>
					<BadgeRatedEnrolled courseInfo={courseInfo} />
					<div className='creators-section'>
						Created by{' '}
						{courseInfo.creators.map((creator) => (
							<span key={creator} className='creators-name'>
								{creator}
							</span>
						))}
					</div>
					<div className='course-meta'>
						<div>
							<img src='/icons/caution.png' className='meta-icon'></img>
							<span className='meta-info'>{courseInfo.lastUpdate}</span>
						</div>
						<div>
							<img src='/icons/language.png' className='meta-icon'></img>
							<span className='meta-info'>{courseInfo.language}</span>
						</div>
						<div>
							<img src='/icons/close-caption.png' className='meta-icon'></img>
							<span className='meta-info'>{courseInfo.caption}</span>
						</div>
					</div>
					<div className='min-screen'>
						<div className='course-header-content-course-price '>
							{courseInfo.price}
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
					<SideMenu courseInfo={courseInfo} />
				</div>
			</div>
		</div>
	);
};

CourseHeader.defaultProps = {
	courseInfo: {
		name: 'Learn Python: The Complete Python Programming Course',
		decription:
			'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
		creators: ['Avinash Jain', 'The Codex'],
		path: ['Development', 'Programming Languages', 'Python'],
		img: 'https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg',
		lastUpdate: 'Last updated 9/2015',
		language: 'English',
		caption: 'English',
		price: 'E£679.99',
		isBestSeller: true,
		rating: 4.4,
		ratesCount: '18,097',
		enrolledsCount: '191,375',
	},
};

export default CourseHeader;
