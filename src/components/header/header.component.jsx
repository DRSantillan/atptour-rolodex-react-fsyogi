import React from 'react';

import Search from '../search/search.component';
import './header.styles.scss';

const Header = ({ handleChange }) => {
    
	return (
		<div className='header'>
			<h1>ATP World Tour - Players Rolodex</h1>
			<Search handleChange={handleChange} />
		</div>
	);
};

export default Header;
