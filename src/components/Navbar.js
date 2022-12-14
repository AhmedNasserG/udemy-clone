import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<nav className='navbar navbar-expand-lg bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					<img
						height='34'
						src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
						alt='udemy logo'
					/>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarText'
					aria-controls='navbarText'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarText'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex'>
						<li className='nav-item'>
							<a className='nav-link' href='/'>
								Categories
							</a>
						</li>
						{/* TODO: make search field fill the navbar */}
						<li className='search-container container-fluid flex-fill'>
							<button className='search-button' type='button'>
								<img
									className='search-button-img'
									src='https://img.icons8.com/ios-glyphs/344/search--v1.png'
									alt='search icon'
									onClick={() => {
										const searchField = document.querySelector('.search-box');
										const searchTerm = searchField.value;
										navigate({
											pathname: '/',
											search: `search-term=${searchTerm}`,
										});
									}}
								/>
							</button>
							<input
								id='search-box'
								className='search-box'
								type='text'
								placeholder='Search for anything'
								aria-label='Search'
							/>
						</li>
					</ul>
					<ul className='navbar-nav '>
						<li className='nav-item'>
							<a className='nav-link' href='/'>
								Udemy Business
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/'>
								Teach on Udemy
							</a>
						</li>
						<li className='nav-item'>
							<a className='navbar-brand' href='/'>
								<img
									src='https://img.icons8.com/material-outlined/344/shopping-cart--v1.png'
									alt=''
									height='24'
								></img>
							</a>
						</li>
						<button className='navbar-item login-button'>Log In</button>
						<button className='navbar-item signup-button'>Sign Up</button>
						<button className='navbar-item language-button'>
							<img
								className='language-img'
								src='https://img.icons8.com/material-outlined/344/globe--v2.png'
								alt='language icon'
							/>
						</button>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
