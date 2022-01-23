import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import { players } from './db/players.db';
import './App.css';
import Header from './components/header/header.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			players,
			searchTerm: '',
		};
	}
	onSearchBoxTextChanged = event => {
		this.setState({ searchTerm: event.target.value });
	};
	

	render() {
		const { players, searchTerm} = this.state;

		const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()))
		return (
			<div className='App'>
				<Header handleChange={this.onSearchBoxTextChanged} />
				<CardList players={filteredPlayers}></CardList>
			</div>
		);
	}
}

export default App;
