import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CoursePage from './course-page/CoursePage';
import Navbar from './components/Navbar';

export const CategoriesContext = createContext([]);
export const CoursesContext = createContext({});

function App() {
	const [categories, setCategories] = useState([]);
	const [courses, setCourses] = useState({});
	useEffect(() => {
		fetch('http://localhost:3000/categories')
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
			});
		fetch('http://localhost:3000/courses')
			.then((res) => res.json())
			.then((data) => {
				setCourses(data);
			});
	}, []);

	return (
		<div className='App'>
			<CoursesContext.Provider value={courses}>
				<Navbar />
			</CoursesContext.Provider>
			<Routes>
				<Route
					path='/'
					element={
						<CategoriesContext.Provider value={categories}>
							<Home />
						</CategoriesContext.Provider>
					}
				/>
				<Route
					path='course/:courseId'
					element={
						<CoursesContext.Provider value={courses}>
							<CoursePage />
						</CoursesContext.Provider>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
