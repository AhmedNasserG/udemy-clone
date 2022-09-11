import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './HandleLoading.css';

const HandleLoading = ({ children, CTX }) => {
	if (CTX.loading) {
		return (
			<div className='loading'>
				<ClipLoader className='spinner' />
				Data is loading...
			</div>
		);
	} else if (CTX.error) {
		return <div className='error'>Error: {CTX.error}</div>;
	} else {
		return children;
	}
};

export default HandleLoading;
