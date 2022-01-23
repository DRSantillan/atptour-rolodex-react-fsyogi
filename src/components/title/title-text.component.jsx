import React from 'react';


const TitleText = ({text}) => {
    return (
		<div className='player-name-container'>
			<div className='player-first-name'>{text[0]}</div>
			<div className='player-last-name'>{text[1]}</div>
		</div>
	);
}

export default TitleText;
