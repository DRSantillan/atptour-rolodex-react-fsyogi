import React from 'react';
import { generateKey } from '../../util/utilities';
import './social-media-item.styles.scss';

const SocialMediaItem = ({ url, icon, platform }) => {
	return (
		<div key={generateKey()} className='social-media-item'>
			<a
				href={url}
				target='_blank'
				rel='noreferrer'
				title={`Click here to view players ${platform} account`}
			>
				<img src={icon} alt={platform} />
			</a>
		</div>
	);
};

export default SocialMediaItem;
