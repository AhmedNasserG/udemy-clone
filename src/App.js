import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import Navbar from './components/Navbar';
import { CategoriesContext } from './contexts/CategoriesContext';
import { CoursesContext } from './contexts/CoursesContext';

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
			});
		fetch('http://localhost:3000/courses')
			.then((res) => res.json())
			.then((data) => {
				setCourses({
					data: data,
					loading: false,
					error: null,
				});
			});
	}, []);

	return (
		<div className='App'>
			<CoursesContext.Provider value={courses}>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<CategoriesContext.Provider value={categories}>
								<Home />
							</CategoriesContext.Provider>
						}
					/>
					<Route path='course/:courseId' element={<Course />} />
				</Routes>
			</CoursesContext.Provider>
		</div>
	);
}

export default App;
