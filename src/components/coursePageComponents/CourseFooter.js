import React from 'react';
import './CourseFooter.css';

const CourseFooter = () => {
	return (
		<div className='course-footer'>
			<div className='course-footer-top'>
				<div className='course-footer-title'>
					<div>
						Top companies choose <a>Udemy Business</a> to build in-demand career
						skills.
					</div>
				</div>
				<div>
					<img
						className='course-footer-logo'
						alt='Nasdaq'
						src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg'
					></img>
					<img
						className='course-footer-logo'
						alt='Volkswagen'
						src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg'
					></img>
					<img
						className='course-footer-logo'
						alt='Box'
						src='https://s.udemycdn.com/partner-logos/v4/box-light.svg'
					></img>
					<img
						className='course-footer-logo'
						alt='NetApp'
						src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg'
					></img>
					<img
						className='course-footer-logo'
						alt='Eventbrite'
						src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg'
					></img>
				</div>
			</div>
			<div className='course-footer-bottom'>
				<div className='footer-lists'>
					<ul>
						<li>
							<a href='#'>Udemy Business</a>
						</li>
						<li>
							<a href='#'>Teach on Udemy</a>
						</li>
						<li>
							<a href='#'>Get the app</a>
						</li>
						<li>
							<a href='#'>About us</a>
						</li>
						<li>
							<a href='#'>Contact us</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href='#'>Careers</a>
						</li>
						<li>
							<a href='#'>Blog</a>
						</li>
						<li>
							<a href='#'>Help and Support</a>
						</li>
						<li>
							<a href='#'>Affiliate</a>
						</li>
						<li>
							<a href='#'>Investors</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href='#'>Terms</a>
						</li>
						<li>
							<a href='#'>Privacy policy</a>
						</li>
						<li>
							<a href='#'>Cookie settings</a>
						</li>
						<li>
							<a href='#'>Sitemap</a>
						</li>
						<li>
							<a href='#'>Accessibility statement</a>
						</li>
					</ul>
					<button>
						<img src='./icons/language.png'></img>English
					</button>
				</div>
				<div className='footer-logo-copywrites'>
					<img
						className='footer-udemy-logo'
						alt='udemy logo'
						src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
					></img>
					<div className='copywrites'>© 2022 Udemy, Inc.</div>
				</div>
			</div>
		</div>
	);
};

export default CourseFooter;
