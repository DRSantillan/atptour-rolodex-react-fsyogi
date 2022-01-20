import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import { players } from './db/players.db';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			players,
		};
	}
	
	render() {
		return (
			<div className='App'>
				<CardList players={this.state.players}></CardList>
			</div>
		);
	}
}

export default App;
