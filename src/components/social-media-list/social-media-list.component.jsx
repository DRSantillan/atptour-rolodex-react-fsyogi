import React from 'react';

import SocialMedia from '../social-media/social-media.component';
import { generateKey } from '../../util/utilities';
import './social-media-list.styles.scss';

const SocialMediaList = ({ socialmedia }) => {
	return (
		<div className='social-media-container'>
			<div className='social-media'>
				{socialmedia.map(socialMediaItem => (
					<SocialMedia
						key={generateKey()}
						socialmediaitem={socialMediaItem}
					/>
				))}
			</div>
		</div>
	);
};

export default SocialMediaList;
