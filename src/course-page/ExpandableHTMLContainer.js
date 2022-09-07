import React, { useState } from 'react';
import './ExpandableHTMLContainer.css';

const ExpandableHTMLContainer = ({ id, innerHtml }) => {
	const [descriptionShowMore, setDescriptionShowMore] = useState(false);

	const toggleDescriptionShowMore = () => {
		if (!descriptionShowMore) {
			setDescriptionShowMore(true);
			document
				.querySelector(`#description-section-${id}`)
				.classList.remove('description-section-collapse');
		} else {
			setDescriptionShowMore(false);
			document
				.querySelector(`#description-section-${id}`)
				.classList.add('description-section-collapse');
		}
	};
	return (
		<div>
			<div
				id={`description-section-${id}`}
				className='description-section-collapse'
				dangerouslySetInnerHTML={{ __html: innerHtml }}
			></div>
			<button
				className='description-show-more-button'
				onClick={toggleDescriptionShowMore}
			>
				{descriptionShowMore ? 'Show less ⋀' : 'Show more ⋁'}
			</button>
		</div>
	);
};

ExpandableHTMLContainer.defaultProps = {
	id: 'id',
	innerHtml: `<div>
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
};

export default ExpandableHTMLContainer;
