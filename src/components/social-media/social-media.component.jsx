import React from 'react';
import facebookIcon from '../../assets/icons/facebook.png';
import webIcon from '../../assets/icons/web.png';
import twitterIcon from '../../assets/icons/twitter.png';
import youtubeIcon from '../../assets/icons/youtube.png';
import instagramIcon from '../../assets/icons/instagram.png';
import topcourtIcon from '../../assets/icons/topcourt-logo.svg';
import SocialMediaItem from './social-media-item.component';

import { generateKey } from '../../util/utilities';
const TOP_COURT_URL = 'https://www.topcourt.com/p/';
const INSTAGRAM_URL = 'https://www.instagram.com/';
const FACEBOOK_URL = 'https://www.facebook.com/';
const TWITTER_URL = 'https://twitter.com/';
const YOUTUBE_URL = 'https://www.youtube.com/';

const SocialMedia = ({ socialmediaitem }) => {
	for (let key in socialmediaitem) {
		if (socialmediaitem[key] !== null) {
			switch (key) {
				case 'instagram':
					return (
						<SocialMediaItem
							key={generateKey()}
							url={`${INSTAGRAM_URL}${socialmediaitem[key]}`}
							icon={instagramIcon}
							platform={key}
						/>
					);

				case 'twitter':
					return (
						<SocialMediaItem
							key={generateKey()}
							url={`${TWITTER_URL}${socialmediaitem[key]}`}
							icon={twitterIcon}
							platform={key}
						/>
					);

				case 'facebook':
					return (
						<SocialMediaItem
							key={generateKey()}
							url={`${FACEBOOK_URL}${socialmediaitem[key]}`}
							icon={facebookIcon}
							platform={key}
						/>
					);

				case 'youtube':
					return (
						<SocialMediaItem
							key={generateKey()}
							url={`${YOUTUBE_URL}${socialmediaitem[key]}`}
							icon={youtubeIcon}
							platform={key}
						/>
					);

				case 'topcourt':
					return (
						<SocialMediaItem
							key={generateKey()}
							url={`${TOP_COURT_URL}${socialmediaitem[key]}`}
							icon={topcourtIcon}
							platform={key}
						/>
					);

				case 'web':
					return (
						<SocialMediaItem
							key={generateKey()}
							url={socialmediaitem[key]}
							icon={webIcon}
							platform={key}
						/>
					);

				default:
					return null;
			}
		}
	}
	return null;
};

export default SocialMedia;
