import React from 'react';
import facebookIcon from '../../assets/icons/facebook.png';
import webIcon from '../../assets/icons/web.png';
import twitterIcon from '../../assets/icons/twitter.png';
import youtubeIcon from '../../assets/icons/youtube.png';
import instagramIcon from '../../assets/icons/instagram.png';
import topcourtIcon from '../../assets/icons/topcourt-logo.svg';
const TOP_COURT_URL = 'https://www.topcourt.com/p/';
const INSTAGRAM_URL = 'https://www.instagram.com/';
const FACEBOOK_URL = 'https://www.facebook.com/';
const TWITTER_URL = 'https://twitter.com/';
const YOUTUBE_URL = 'https://www.youtube.com/';

const SocialMediaItem = ({ socialmediaitem }) => {
	console.log(socialmediaitem);
	let item = null;
	console.log(socialmediaitem['instagram']);
	for (let key in socialmediaitem) {
		if (socialmediaitem[key] !== null) {
			switch (key) {
				case 'instagram':
					item = `${INSTAGRAM_URL}${socialmediaitem[key]}`;
					return (
						<a href={item} target='_blank' rel='noreferrer'>
							<img
								src={instagramIcon}
								alt='FaceBook'
								width='30px'
							/>
						</a>
					);
					break;
				case 'twitter':
					item = `${TWITTER_URL}${socialmediaitem[key]}`;
					return (
						<a href={item} target='_blank' rel='noreferrer'>
							<img src={twitterIcon} alt='Twitter' width='30px' />
						</a>
					);
					break;
				case 'facebook':
					item = `${FACEBOOK_URL}${socialmediaitem[key]}`;
					return (
						<a href={item} target='_blank' rel='noreferrer'>
							<img
								src={facebookIcon}
								alt='Twitter'
								width='30px'
							/>
						</a>
					);
					break;
				case 'youtube':
					item = `${YOUTUBE_URL}${socialmediaitem[key]}`;
					return (
						<a href={item} target='_blank' rel='noreferrer'>
							<img src={youtubeIcon} alt='Twitter' />
						</a>
					);
					break;
				case 'topcourt':
					item = `${TOP_COURT_URL}${socialmediaitem[key]}`;
					return (
						<a href={item} target='_blank' rel='noreferrer'>
							<img
								src={topcourtIcon}
								alt='Official Site'
								height='28px'
							/>
						</a>
					);
					break;
				case 'web':
					item = `${socialmediaitem[key]}`;
					return (
						<a href={item} target='_blank' rel='noreferrer'>
							<img
								src={webIcon}
								alt='Official Site'
								width='28px'
							/>
						</a>
					);
					break;
				default:
					return item;
			}
		}
	}
	return <div>{item}</div>;
};

export default SocialMediaItem;
