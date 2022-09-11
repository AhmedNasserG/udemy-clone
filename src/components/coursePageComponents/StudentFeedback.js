import React from 'react';
import StarRatings from 'react-star-ratings';
import './StudentFeedback.css';

const StudentFeedback = ({ feedback }) => {
	return (
		<div className='feedback-body'>
			<div className='feedback-total-rating'>
				<div className='feedback-rating'>{feedback.rating}</div>
				<StarRatings
					className='total-rating-stars'
					rating={feedback.rating}
					starDimension='18px'
					starSpacing='1px'
					starRatedColor='#e59819'
				/>
				<div className='course-rating-text'>Course Rating</div>
			</div>
			<div className='specific-rating'>
				<SpecificFeedback rating={5} percentage={feedback.fiveStarsPercent} />
				<SpecificFeedback rating={4} percentage={feedback.fourStarsPercent} />
				<SpecificFeedback rating={3} percentage={feedback.threeStarsPercent} />
				<SpecificFeedback rating={2} percentage={feedback.twoStarsPercent} />
				<SpecificFeedback rating={1} percentage={feedback.oneStarsPercent} />
			</div>
		</div>
	);
};

const SpecificFeedback = ({ rating, percentage }) => {
	return (
		<div className='specific-rating-item'>
			<div className='progress'>
				<div
					className='progress-bar'
					role='progressbar'
					style={{ width: `${percentage}%` }}
					aria-valuenow='50'
					aria-valuemin='0'
					aria-valuemax='100'
				></div>
			</div>
			<div className='specific-rating-stars'>
				<StarRatings
					rating={rating}
					starDimension='19px'
					starSpacing='1px'
					starRatedColor='#e59819'
				/>
			</div>
			<div className='rating-percentage'>{`${percentage}%`}</div>
		</div>
	);
};

StudentFeedback.defaultProps = {
	feedback: {
		rating: 4.4,
		fiveStarsPercent: 45,
		fourStarsPercent: 39,
		threeStarsPercent: 13,
		twoStarsPercent: 2,
		oneStarsPercent: 1,
	},
};

export default StudentFeedback;
