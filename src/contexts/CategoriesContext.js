import { createContext } from 'react';

export const CategoriesContext = createContext({
	data: null,
	loading: false,
	error: null,
});
