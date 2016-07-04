/**
 * Created by jhonataalmeida on 6/28/16.
 */
import React, { Component, PropType } from 'react';

class Main extends Component {
	render() {

		const data = [
			{id: 1, author: "Jhonata Ribeiro", text: "This is one comment"},
			{id: 2, author: "Jhon Stuart", text: "This is *another* comment"}
		];

		return (
			<div>Comments</div>
		);
	}
}

export default Main;
