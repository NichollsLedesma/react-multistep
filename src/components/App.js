import React, { Component } from 'react';
import Multistep from './MiultiStep';
import { steps } from './steps/index';
import './css/custom.css';
import './css/normalize.css';
import './css/prog-tracker.css';
import './css/skeleton.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div>
					<Multistep showNavigation={true} steps={steps} />
				</div>
				
			</div>
		);
	}
}

export default App;
