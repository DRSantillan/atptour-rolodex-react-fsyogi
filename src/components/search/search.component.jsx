import React from 'react';
import './search.styles.scss';

const Search = ({ handleChange }) => {
	return (
		<div className='search-container'>
			<input
				type='text'
				placeholder='Enter a players name...'
				onChange={handleChange}
			/>
		</div>
	);
};

export default Search;
