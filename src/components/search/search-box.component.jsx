import React from 'react';
import './search-box.styles.scss';

const SearchBox = ({ handleChange }) => {
	return (
		<div className='search-container'>
			<input
				type='text'
				placeholder='Search for your favourite player...'
				onChange={handleChange}
			/>
		</div>
	);
};

export default SearchBox;
