import React from 'react';
import './card.styles.scss';
import SocialMediaList from '../social-media-list/social-media-list.component';
import TitleText from '../title/title-text.component';
import ImageContainer from '../image-container/image-container.component';
import TextLabel from '../label/label.component';

const Card = props => {
	const {
		firstName,
		lastName,
		image,
		country,
		countryimage,
		age,
		birthdate,
		birthplace,
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
			<TitleText text={[firstName, lastName]} />
			<div className='player-ranking'>
				<div className='player-ranking-text'>
					<span>Singles</span>
					<span className='larger'>Ranking</span>
				</div>
				<TextLabel cssClass={'player-ranking-number'} text={rank} />
				<div className='player-ranking-flag'>
					<img src={`/images/${countryimage}`} alt='' />
				</div>
				<div className='player-ranking-country'>
					<span>{country}</span>
				</div>
			</div>
			<SocialMediaList socialmedia={socialmedia} />
			<ImageContainer image={image} />
			<div className='player-bio-container'>
				<div className='player-bio'>
					<TextLabel cssClass={'player-bio-label'} text={'Age'} />
					<div className='player-bio-content'>
						<div>
							{age}
							<span className='smaller'>({birthdate})</span>
						</div>
					</div>
				</div>
				<div className='player-bio'>
					<TextLabel
						cssClass={'player-bio-label'}
						text={'Turned Pro'}
					/>
					<TextLabel
						cssClass={'player-bio-content'}
						text={turnedpro}
					/>
				</div>
				<div className='player-bio'>
					<TextLabel cssClass={'player-bio-label'} text={'Weight'} />
					<div className='player-bio-content'>
						<div className='content'>
							{weightInPounds}lbs
							<span className='smaller'>({weight}kg)</span>
						</div>
					</div>
				</div>
				<div className='player-bio'>
					<TextLabel cssClass={'player-bio-label'} text={'Height'} />
					<div className='player-bio-content'>
						<div className='content'>
							{heightInFeetAndInches(height)}
							<div className='smaller'>({height}cm)</div>
						</div>
					</div>
				</div>
				<div className='player-bio'>
					<TextLabel
						cssClass={'player-bio-label'}
						text={'Birthplace'}
					/>
					<TextLabel
						cssClass={'player-bio-content medium'}
						text={birthplace}
					/>
				</div>
				<div className='player-bio'>
					<TextLabel cssClass={'player-bio-label'} text={'Plays'} />
					<TextLabel
						cssClass={'player-bio-content medium'}
						text={plays}
					/>
				</div>
				<div className='player-bio '>
					<TextLabel cssClass={'player-bio-label'} text={'Coach'} />
					<TextLabel
						cssClass={'player-bio-content medium'}
						text={coach.join(', ')}
					/>
				</div>
				<div className='player-bio '>
					<TextLabel cssClass={'player-bio-label'} text={'Points'} />
					<TextLabel
						cssClass={'player-bio-content medium'}
						text={points}
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;
