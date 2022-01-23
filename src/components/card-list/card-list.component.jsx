import React from 'react';
import './card-list.styles.scss'
import Card from '../card/card.component';
import { generateKey } from '../../util/utilities';
 
const CardList = ({ players }) => {

	return (
		<div className='card-list'>
			{ players.length > 0 ? players.map(player => (
				<Card key={generateKey()} player={player} />
			)) : ( <div className='noplayers'>No Players Found... Search Again!</div>)}
		</div>
	);
};

export default CardList;