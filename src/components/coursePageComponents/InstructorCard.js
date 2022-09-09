import React from 'react';
import ExpandableHTMLContainer from './ExpandableHTMLContainer';
import './InstructorCard.css';

const InstructorCard = ({ instructor }) => {
	return (
		<div className='instructor-card'>
			<div className='instructor-name'>{instructor.name}</div>
			<div className='instructor-subtitle'>{instructor.subtitle}</div>
			<div className='instructor-image-and-stats'>
				<img className='instuctor-image' src={instructor.image}></img>
				<div className='instructor-stats'>
					<div className='instructor-stat'>
						<img className='instructor-stat-icon' src='/icons/star.png'></img>
						{`${instructor.rating} Instructor Rating`}
					</div>
					<div className='instructor-stat'>
						<img className='instructor-stat-icon' src='/icons/prize.png'></img>
						{`${instructor.reviewsCount} Reviews`}
					</div>
					<div className='instructor-stat'>
						<img className='instructor-stat-icon' src='/icons/people.png'></img>
						{`${instructor.studentsCount} Students`}
					</div>
					<div className='instructor-stat'>
						<img
							className='instructor-stat-icon'
							src='/icons/play-button-sm.png'
						></img>
						{`${instructor.coursesCount} Courses`}
					</div>
				</div>
			</div>
			<ExpandableHTMLContainer
				id={`instructor-${instructor.name.replaceAll(' ', '-')}`}
				innerHtml={instructor.description}
			/>
		</div>
	);
};

InstructorCard.defaultProps = {
	instructor: {
		name: 'Edwin Diaz',
		subtitle: 'Web Developer & Premium Instructor - 800,000 students',
		image: 'https://img-c.udemycdn.com/user/200_H/6772884_fcfc_2.jpg',
		rating: '4.4',
		reviewsCount: '123,313',
		studentsCount: '828,692',
		coursesCount: '47',
		description:
			'<div><p class=""><strong class="">Edwin Diaz</strong> is a software and web technologies engineer, a life coach trainer who is also a<strong class=""> serial entrepreneur</strong> with multiple <strong class="">online businesses,</strong> ranging from online jewelry shops, affiliate websites, application development and consultations services, personal online schools, etc.</p><p class="">With over <strong class="">one million students</strong>, and clients growing by the thousands a day, Mr. Diaz lets the numbers speak for themselves.</p><p class="">Founding multiple online companies have allowed Mr. Diaz to have the time to teach others. He currently teaches web technologies on different online platforms. He also teaches life coaching sessions to help others achieve a high level of success in many areas of life.</p><p>For Mr. Diaz, there is nothing more rewarding than helping others become successful.</p><p>His ability to transmit energy, enthusiasm, and complex knowledge allows him to do what he does best "Teach".</p><p>Teaching is not just a job for Mr. Diaz but a way of life that continues to flourish every single day.</p><p>Apart from teaching he enjoys spending part of his time with his family.</p></div>',
	},
};

export default InstructorCard;
