import * as React from 'react';
import { Component } from 'react';

export interface Properties {
	
}

export interface State {
	text?: string;
}

export default class App extends Component<Properties, State> {
	
	constructor() {
		super();
		
		this.state = {
			text: 'Hello World!'
		};
	}
	
	render() {
		return (
			<body>
				<h1>{this.state.text}</h1>
			</body>
		);
	}
}
