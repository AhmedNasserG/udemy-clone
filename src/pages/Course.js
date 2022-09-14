import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CourseHeader from '../components/coursePageComponents/CourseHeader';
import CourseContent from '../components/coursePageComponents/CourseContent';
import ExpandableHTMLContainer from '../components/coursePageComponents/ExpandableHTMLContainer';
import InstructorCard from '../components/coursePageComponents/InstructorCard';
import StudentFeedback from '../components/coursePageComponents/StudentFeedback';
import Reviews from '../components/coursePageComponents/Reviews';
import CourseFooter from '../components/coursePageComponents/CourseFooter';
import { CoursesContext } from '../contexts/CoursesContext';
import './Course.css';

const Course = () => {
	const courseId = useParams().courseId;
	const CoursesCTX = useContext(CoursesContext);
	if (CoursesCTX.loading) {
		return <p style={{ 'margin-top': '100px' }}>Loading ...</p>;
	} else if (CoursesCTX.error) {
		return <p style={{ 'margin-top': '100px' }}>Error: {CoursesCTX.error}</p>;
	}
	const courses = CoursesCTX.data;
	const course = courses[courseId];
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

export default Course;
