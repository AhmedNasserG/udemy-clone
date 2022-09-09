import { createContext } from 'react';

export const CoursesContext = createContext({
	data: null,
	loading: false,
	error: null,
});
