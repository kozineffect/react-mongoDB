import React, { Component } from 'react';
import logo from '../img/gamerrtag-logo.png';
import GTag from './children/GTag.js';
import UserName from './children/UserName.js';
var Link = require("react-router").Link;

class App extends Component {
	render(){
  		return (
  			<div className="App">
  				<div className="App-header jumbotron">
  					<ul className="nav navbar-nav navbar-right">
                  		<li><Link to="/signup">Sign Up</Link></li>
                	</ul>
					  <span id="menu-dropdown" className="glyphicon glyphicon-menu-hamburger navbar-left"></span>
  					<img id="gtLogo" src={logo} alt="gamertag-logo"/>
  				</div>
  				<div>
  					<div id="profile-cont" className="tagged">
						<div className="row">
							<UserName />
						</div>
						<div className="row">
							<div className="col-xs-6"></div>
							<GTag />
						</div>
					</div>
						{this.props.children}
  				</div>
			</div>
		);
	}
};

export default App;