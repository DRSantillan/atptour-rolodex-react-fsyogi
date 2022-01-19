import React, { Component } from 'react';

import { players } from './db/players.db';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			players,
		};
	}
	capitalize = word => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};
	displaySocialMedia = socialMedia => {
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
								{this.capitalize(key)}: {TOP_COURT_URL}
								{item[key]}
							</div>
						);
					} else if (key === 'instagram') {
						return (
							<div>
								{this.capitalize(key)}: {INSTAGRAM_URL}
								{item[key]}
							</div>
						);
					} else if (key === 'twitter') {
						return (
							<div>
								{this.capitalize(key)}: {TWITTER_URL}
								{item[key]}
							</div>
						);
					} else if (key === 'facebook') {
						return (
							<div>
								{this.capitalize(key)}: {FACEBOOK_URL}
								{item[key]}
							</div>
						);
					} else if (key === 'web') {
						return (
							<div>
								{this.capitalize(key)}: {item[key]}
							</div>
						);
					} else if (key === 'youtube') {
						return (
							<div>
								{this.capitalize(key)}: {YOUTUBE_URL}
								{item[key]}
							</div>
						);
					}
				}
			}
		});
	};
	render() {
		return (
			<div className='App'>
				{this.state.players.map(player => {
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
					} = player;

					return (
						<section key={rank.toString()}>
							<h1>{name}</h1>
							<img
								src={`/images/${image}`}
								alt=''
								width='250px'
							/>
							<div>
								Country: {country}
								<img
									src={`/images/${countryimage}`}
									alt=''
									width='100px'
								/>
							</div>
							<div>Rank: {rank}</div>
							<div>Points: {points}</div>
							<div>Age: {turnedpro}</div>
							<div>Birth Date: {birthdate}</div>
							<div>Age: {age}</div>
							<div>Weight: {weight}kg</div>
							<div>Height: {height}cm</div>
							<div>Coach: {coach.join(', ')}</div>
							<div>{this.displaySocialMedia(socialmedia)}</div>
						</section>
					);
				})}
			</div>
		);
	}
}

export default App;
