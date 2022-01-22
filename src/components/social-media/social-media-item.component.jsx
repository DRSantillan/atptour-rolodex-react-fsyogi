import React from 'react';
import { generateKey } from '../../util/utilities';
import './social-media-item.styles.scss'

const SocialMediaItem = ({ url, icon, platform }) => (
	<div key={generateKey()} className='social-media-item'>
		<a href={url} target='_blank' rel='noreferrer'>
			<img src={icon} alt={platform} />
		</a>
	</div>
);

export default SocialMediaItem;
