import React from 'react';
import './card.styles.scss';
import SocialMediaList from '../social-media-list/social-media-list.component';

const Card = props => {
	const {
		firstName,
		lastName,
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
		plays,
	} = props.player;

	const weightInPounds = Math.round(weight * 2.20462);

	const heightInFeetAndInches = height => {
		const feet = Math.floor(height / 2.54 / 12);
		const inches = Math.floor(height / 2.54 - 12 * feet);
		const heightTotal = `${feet}'${inches}"`;
		return heightTotal;
	};

	return (
		<div className='card'>
			<div className='player-name-container'>
				<div className='player-first-name'>{firstName}</div>
				<div className='player-last-name'>{lastName}</div>
			</div>
			<div className='player-ranking'>
				<div className='player-ranking-text'>
					<span>Singles</span>
					<span className='larger'>Ranking</span>
				</div>
				<div className='player-ranking-number'>{rank}</div>
				<div className='player-ranking-flag'>
					<img src={`/images/${countryimage}`} alt='' />
				</div>
				<div className='player-ranking-country'>
					<span>{country}</span>
				</div>
			</div>
			<div>
				<SocialMediaList socialmedia={socialmedia} />
			</div>
			<div className='player-image-container'>
				<img src={`/images/${image}`} alt='' width='250px' />
			</div>
			<div className='player-bio-container'>
				<div className='player-bio gradient'>
					<div className='player-bio-label'>Age</div>
					<div className='player-bio-content'>
						<div>
							{age}
							<span className='smaller'>({birthdate})</span>
						</div>
					</div>
				</div>
				<div className='player-bio'>
					<div className='player-bio-label'>Turned Pro</div>
					<div className='player-bio-content'>{turnedpro}</div>
				</div>
				<div className='player-bio'>
					<div className='player-bio-label'>Weight</div>
					<div className='player-bio-content'>
						<div className='content'>
							{weight}lbs
							<span className='smaller'>({weight}kg)</span>
						</div>
					</div>
				</div>
				<div className='player-bio'>
					<div className='player-bio-label'>Height</div>
					<div className='player-bio-content'>
						<div className='content'>
							{heightInFeetAndInches(height)}
							<div className='smaller'>({height}cm)</div>
						</div>
					</div>
				</div>
				<div className='player-bio'>
					<div className='player-bio-label'>Birthplace</div>
					<div className='player-bio-content medium'>
						Belgrade, Serbia
					</div>
				</div>
				<div className='player-bio'>
					<div className='player-bio-label'>Plays</div>
					<div className='player-bio-content medium'>{plays}</div>
				</div>
				<div className='player-bio '>
					<div className='player-bio-label'>Coach</div>
					<div className='player-bio-content medium '>
						{coach.join(', ')}
					</div>
				</div>
				<div className='player-bio '>
					<div className='player-bio-label'>Points</div>
					<div className='player-bio-content medium '>{points}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
