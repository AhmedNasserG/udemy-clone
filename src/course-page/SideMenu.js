import React from 'react';
import CourseVideo from './CourseVideo';
import './SideMenu.css';

const SideMenu = ({ coursePrice }) => {
	document.addEventListener('scroll', () => {
		const scrollValue = window.scrollY;
		if (scrollValue > 370) {
			document.querySelector('.side-menu').classList.add('side-menu-floating');
			document
				.querySelector('.side-menu-header')
				.classList.add('side-menu-header-floating');
		} else {
			document
				.querySelector('.side-menu')
				.classList.remove('side-menu-floating');
			document
				.querySelector('.side-menu-header')
				.classList.remove('side-menu-header-floating');
		}
	});
	return (
		<div className='side-menu'>
			<div className='side-menu-header'>
				<CourseVideo />
			</div>
			<div className='side-menu-content'>
				<div className='side-menu-course-price'>{coursePrice}</div>
				<button className='side-menu-btn btn-1'>Add to cart</button>
				<button className='side-menu-btn btn-2'>Buy now</button>
				<div className='return-policy-text'>30-Day Money-Back Guarantee</div>
				<div>
					<span className='list-title'>This course includes:</span>
					<ul className='unstyled-list'>
						<li>
							<div className='list-item'>
								<img className='list-icon' src='/icons/tv.png'></img>
								<span>1 hour on-demand video</span>
							</div>
						</li>
						<li>
							<div className='list-item'>
								<img className='list-icon' src='/icons/file.png'></img>
								<span>1 article</span>
							</div>
						</li>
						<li>
							<div className='list-item'>
								<img className='list-icon' src='/icons/folder.png'></img>
								<span>1 downloadable resource</span>
							</div>
						</li>
						<li>
							<div className='list-item'>
								<img className='list-icon' src='/icons/infinite.png'></img>
								<span>Full lifetime access</span>
							</div>
						</li>
						<li>
							<div className='list-item'>
								<img className='list-icon' src='/icons/phone.png'></img>
								<span>Access on mobile and TV</span>
							</div>
						</li>
						<li>
							<div className='list-item'>
								<img className='list-icon' src='/icons/trophy.png'></img>
								<span>Certificate of completion</span>
							</div>
						</li>
					</ul>
					<div className='course-actions'>
						<div>Share</div>
						<div>Gift this course</div>
						<div>Apply Coupon</div>
					</div>
				</div>
			</div>
			<div className='side-menu-footer'>
				<div className='footer-title'>Training 5 or more people?</div>
				<div className='footer-subtitle'>
					Get your team access to 17,000+ top Udemy courses anytime, anywhere.
				</div>
				<button className='side-menu-btn btn-2'>Try Udemy Business</button>
			</div>
		</div>
	);
};

SideMenu.defaultProps = {
	coursePrice: 'E£679.99',
};

export default SideMenu;
