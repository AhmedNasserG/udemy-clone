import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import Navbar from './components/Navbar';
import { CategoriesContext } from './contexts/CategoriesContext';
import { CoursesContext } from './contexts/CoursesContext';
import ScrollToTop from './components/ScrollToTop';
import HandleLoading from './components/HandleLoading';

function App() {
	const [categories, setCategories] = useState({
		data: null,
		loading: true,
		error: null,
	});
	const [courses, setCourses] = useState({
		data: null,
		loading: true,
		error: null,
	});
	useEffect(() => {
		fetch('http://localhost:3000/categories')
			.then((res) => res.json())
			.then((data) => {
				setCategories({
					data: data,
					loading: false,
					error: null,
				});
			})
			.catch((err) => {
				setCategories({
					data: null,
					loading: false,
					error: err.message,
				});
			});
		fetch('http://localhost:3000/courses')
			.then((res) => res.json())
			.then((data) => {
				setCourses({
					data: data,
					loading: false,
					error: null,
				});
			})
			.catch((err) => {
				setCourses({
					data: null,
					loading: false,
					error: err.message,
				});
			});
	}, []);

	return (
		<div className='App'>
			<CategoriesContext.Provider value={categories}>
				<CoursesContext.Provider value={courses}>
					<Navbar />
					<ScrollToTop />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='course/:courseId'
							element={
								<HandleLoading CTX={useContext(CoursesContext)}>
									<Course />
								</HandleLoading>
							}
						/>
					</Routes>
				</CoursesContext.Provider>
			</CategoriesContext.Provider>
		</div>
	);
}

export default App;
