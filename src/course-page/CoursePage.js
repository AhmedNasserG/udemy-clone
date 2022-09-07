import React from 'react';
import CourseContent from './CourseContent';
import CourseHeader from './CourseHeader';
import ExpandableHTMLContainer from './ExpandableHTMLContainer';
import CourseFooter from './CourseFooter';
import InstructorCard from './InstructorCard';
import Reviews from './Reviews';
import StudentFeedback from './StudentFeedback';
import './CoursePage.css';

const CoursePage = ({ course }) => {
	return (
		<div className='course-page'>
			<CourseHeader courseInfo={course.info} />
			<div className='course-page-body'>
				<div className='section section-box container'>
					<div className='section-title'>What you&#39;ll learn</div>
					<div className='row row-cols-6'>
						{course.learnGoals.map((goal) => (
							<div key={goal} className='col-6 sub-title'>
								{goal}
							</div>
						))}
					</div>
				</div>
				<div className='section '>
					<div className='section-title'>Course content</div>
					<CourseContent content={course.content} />
				</div>
				<div className='section'>
					<div className='section-title'>Requirements</div>
					<ul>
						{course.requirments.map((req) => (
							<li key={req}>{req}</li>
						))}
					</ul>
				</div>
				<div className='section'>
					<div className='section-title'>Description</div>
					<ExpandableHTMLContainer
						id='course-description'
						innerHtml={course.description}
					/>
				</div>
				<div className='section'>
					<div className='section-title'>Instructors</div>
					{course.instructors.map((instructor) => (
						<InstructorCard key={instructor.name} instructor={instructor} />
					))}
				</div>
				<div className='section'>
					<div className='section-title'>Student feedback</div>
					<StudentFeedback feedback={course.feedback} />
				</div>
				<div className='section'>
					<div className='section-title'>Reviews</div>
					<Reviews reviews={course.reviews} />
				</div>
			</div>
			<CourseFooter />
		</div>
	);
};

CoursePage.defaultProps = {
	course: {
		info: {
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
		learnGoals: [
			'To learn the python language',
			'To learn the CORE skills to understand any programming language',
		],
		requirments: [
			'Basic knowledge of programming',
			'Have a computer (either Mac, Windows, or Linux)',
		],
		description: `<div>
					<p>
						<strong>NEW PYTHON CODE&nbsp;</strong>
					</p>

					<p>
						This python for beginners course is geared to students who want to
						know how python works and also to those totally new to programming.
					</p>

					<p>
						The python language has very simple syntax(way to write it) to learn
						and it is one of the most powerful languages to learn since it can
						used for a variety of things.
					</p>

					<p>
						<strong>Here are some:</strong>
					</p>

					<ol>
						<li>Data analysis</li>
						<li>Game development</li>
						<li>Visualization</li>
						<li>Web development</li>
						<li>Robotics</li>
						<li>and more....</li>
					</ol>

					<p>
						<br />
					</p>

					<p>
						Jobs in this field are really lucrative and knowing this language
						will give you an edge when finding a job and making a lot more money
						than other developers; python developers are not as many as in other
						languages since people think is hard. Python is super easy to learn
						but very powerful since it contains many possibilities.
						<br />
					</p>

					<p>
						Python is growing faster and faster everyday and it has surpassed
						many other languages over the years for a lot of reasons, which you
						will find out soon enough.
					</p>

					<p>
						------------------------------------------------------------------------------
					</p>

					<p>
						<strong>Why take this course?</strong>
					</p>

					<p>
						This course starts with explaining what programming really is? Have
						you ever wondered how things actually work in a program?
					</p>

					<p>
						1. <strong>Teaches the foundation of GENERAL programming</strong>
					</p>

					<p>
						Every student should have some foundations on what programming
						really is before learning any language, why? Because once you
						understand the core components of programming it will be a lot
						easier to learn any language and create better programs.
					</p>

					<p>
						2. <strong>New lectures added all the time</strong>
					</p>

					<p>
						When you like what you do, it reflects. This is not a job for me, so
						I wake up wanting to code and help my students. Basically you pay
						once, get the course forever and get extra values added all the
						time, you have to love that :)
					</p>

					<p>
						3.<strong> Fun place to be </strong>
						<br />
					</p>

					<p>
						I love making my lectures fun and engaging, so no boring lectures
						here!
					</p>

					<p>
						4. <strong>T</strong>
						<strong>he support you get in this course in unmatched</strong>
					</p>

					<p>
						have you ever joined a class and received very little support or
						none at all? Well that is not going to happen in this class, because
						I love helping my students.
					</p>

					<p>
						<br />
					</p>
				</div>`,
		content: {
			sectionsCount: 6,
			lecturesCount: 42,
			totalDuration: '2h 36m',
			sections: [
				{
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
				{
					id: '2',
					title: 'Getting started with Python',
					subtitle: '5 lectures • 15min',
					items: [
						{
							title: 'Intro to getting started with Python',
							duration: '10:15',
							previewable: false,
						},
						{
							title: 'What is Python?',
							duration: '04:23',
							previewable: false,
						},
					],
				},
			],
		},
		instructors: [
			{
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
			{
				name: 'Coding Faculty Solutions',
				subtitle: 'Coding Faculty',
				image: 'https://img-c.udemycdn.com/user/200_H/34613172_6fb4.jpg',
				rating: '4.4',
				reviewsCount: '115,018',
				studentsCount: '737,350',
				coursesCount: '38',
				description:
					'<p class="">Coding Faculty creates&nbsp;high quality technology training content.&nbsp;We aim to teach technology the right&nbsp;way but at the same time putting emphasis on each of&nbsp;our students.&nbsp;We are a&nbsp;growing team of&nbsp;professional trainers who love our work but overall helping our students reach their maximum potential in their career.</p>',
			},
		],
		feedback: {
			rating: 4.4,
			fiveStarsPercent: 45,
			fourStarsPercent: 39,
			threeStarsPercent: 13,
			twoStarsPercent: 2,
			oneStarsPercent: 1,
		},
		reviews: [
			{
				name: 'Ashu C.',
				shortName: 'AC',
				rating: 3,
				date: '3 weeks ago',
				content: `Senduran B. Rating: 5.0 out of 5 3 weeks ago Edwin is a wonderful
					teacher! His lectures are very short but also informative and really
					encourages you to code along with him. The lectures were not only easy
					to follow but Edwin himself was an engaging lecturer that made it
					really easy to pay attention. His words of encouragement were a nice
					bonus. I super recommend this course to anyone who wants to get
					started in Python`,
			},
			{
				name: 'Senduran B.',
				shortName: 'SB',
				rating: 5,
				date: '3 weeks ago',
				content: `Edwin is a wonderful teacher! His lectures are very short but also informative and really encourages you to code along with him. The lectures were not only easy to follow but Edwin himself was an engaging lecturer that made it really easy to pay attention. His words of encouragement were a nice bonus. I super recommend this course to anyone who wants to get started in Python`,
			},
		],
	},
};

export default CoursePage;
