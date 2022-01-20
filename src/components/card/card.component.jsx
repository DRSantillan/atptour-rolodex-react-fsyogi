import React from 'react';
import './card.styles.scss';
import SocialMediaList from '../social-media-list/social-media-list.component';

const Card = props => {
	const {
		name,
		image,
		country,
		countryimage,
		age,
		birthdate,
		rank,
		points,
		socialmedia,
		weight,
		height,
		coach,
		turnedpro,
	} = props.player;
	const capitalize = word => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};
	const displaySocialMedia = socialMedia => {
		const TOP_COURT_URL = 'https://www.topcourt.com/p/';
		const INSTAGRAM_URL = 'https://www.instagram.com/';
		const FACEBOOK_URL = 'https://www.facebook.com/';
		const TWITTER_URL = 'https://twitter.com/';
		const YOUTUBE_URL = 'https://www.youtube.com/';
		// eslint-disable-next-line array-callback-return
		return socialMedia.map(item => {
			for (let key in item) {
				if (item[key] !== null) {
					if (key === 'topcourt') {
						return (
							<div>
								{capitalize(key)}: {TOP_COURT_URL}
								{item[key]}
							</div>
						);
					} else if (key === 'instagram') {
						return (
							<div>
								{capitalize(key)}: {INSTAGRAM_URL}
								{item[key]}
							</div>
						);
					} else if (key === 'twitter') {
						return (
							<div>
								{capitalize(key)}: {TWITTER_URL}
								{item[key]}
							</div>
						);
					} else if (key === 'facebook') {
						return (
							<div>
								{capitalize(key)}: {FACEBOOK_URL}
								{item[key]}
							</div>
						);
					} else if (key === 'web') {
						return (
							<div>
								{capitalize(key)}: {item[key]}
							</div>
						);
					} else if (key === 'youtube') {
						return (
							<div>
								{capitalize(key)}: {YOUTUBE_URL}
								{item[key]}
							</div>
						);
					}
				}
			}
		});
	};
	return (
		<div className='card-container'>
			<h1>{name}</h1>
			<img src={`/images/${image}`} alt='' width='250px' />
			<img src={`/images/${countryimage}`} alt='' width='100px' />
			<div>{country}</div>
			<div>Rank: {rank}</div>
			<div>Points: {points}</div>
			<div>Age: {turnedpro}</div>
			<div>Birth Date: {birthdate}</div>
			<div>Age: {age}</div>
			<div>Weight: {weight}kg</div>
			<div>Height: {height}cm</div>
			<div>Coach: {coach.join(', ')}</div>
			<div>
				<SocialMediaList socialmedia={socialmedia} />
			</div>
		</div>
	);
};

export default Card;
