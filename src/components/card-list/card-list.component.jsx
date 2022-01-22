import React from 'react';
import './card-list.styles.scss'
import Card from '../card/card.component';
import { generateKey } from '../../util/utilities';
 
const CardList = ({ players }) => {

	return (
		<div className='card-list'>
			{players.map(player => (
				<Card key={generateKey()} player={player} />
			))}
		</div>
	);
};

export default CardList;