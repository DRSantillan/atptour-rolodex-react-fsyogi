import React from 'react';

const ImageContainer = ({ image }) => {
	return (
		<div className='player-image-container'>
			<img src={`/images/${image}`} alt='' width='250px' />
		</div>
	);
};

export default ImageContainer;
