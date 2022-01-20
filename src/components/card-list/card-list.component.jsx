import React from 'react';
import './card-list.styles.scss'
import Card from '../card/card.component';
 
const CardList = ({ players }) => {

	return (
		<div className='card-list'>
			{players.map(player => (
				<Card key={player.name} player={player} />
			))}
		</div>
	);
};

export default CardList;