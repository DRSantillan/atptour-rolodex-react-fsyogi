import React from 'react';

import SearchBox from '../search/search-box.component';
import './header.styles.scss';

const Header = ({ handleChange }) => {
    
	return (
		<div className='header'>
			<h1>ATP WORLD TOUR PLAYERS</h1>
			<SearchBox handleChange={handleChange} />
		</div>
	);
};

export default Header;
