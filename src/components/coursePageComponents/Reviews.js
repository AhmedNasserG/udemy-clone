import React from 'react';
import StarRatings from 'react-star-ratings';
import './Reviews.css';

const Reviews = ({ reviews }) => {
	return (
		<div>
			<div className='reviews-search-and-filter'>
				<input
					className='reviews-search-field'
					type='text'
					placeholder='Search reviews'
				></input>
				<button className='reviews-search-button'>
					<img className='reviews-search-icon' src='/icons/search.png'></img>
				</button>
				<select className='reviews-filter' name='languages' id='lang'>
					<option value='*'>All ratings</option>
					<option value='1'>Five stars</option>
					<option value='2'>Four stars</option>
					<option value='3'>Three stars</option>
					<option value='4'>Two stars</option>
					<option value='5'>One stars</option>
				</select>
			</div>
			<div className='reviews-list'>
				{/* TODO: add show more reviews option */}
				{/* TODO: add horizontal line to split between each review */}
				{reviews.map((review) => (
					<ReviewItem key={review.name} review={review} />
				))}
			</div>
		</div>
	);
};

const ReviewItem = ({ review }) => {
	return (
		<div className='review-item'>
			<div>
				<div className='review-item-avatar'>{review.shortName}</div>
			</div>
			<div className='review-item-body'>
				<div className='review-item-name'>{review.name}</div>
				<div className='review-item-rating'>
					<div className='review-item-stars'>
						<StarRatings
							rating={review.rating}
							starDimension='19px'
							starSpacing='1px'
							starRatedColor='#e59819'
						/>
					</div>
					<div className='review-item-rating-date'>{review.date}</div>
				</div>
				<div className='review-item-content'>{review.content}</div>
				<p className='review-item-subtitle'>Was this review helpful?</p>
				<div className='review-item-actions'>
					<button className='review-item-button'>
						<img
							className='review-item-button-icon'
							src='/icons/like.png'
						></img>
					</button>
					<button className='review-item-button'>
						<img
							className='review-item-button-icon reversed'
							src='/icons/like.png'
						></img>
					</button>
					<a className='review-item-report'>Report</a>
				</div>
			</div>
			<hr />
		</div>
	);
};

Reviews.defaultProps = {
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
};

export default Reviews;
