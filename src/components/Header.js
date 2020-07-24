import React from "react"

import LogOutButton from "./LogOutButton.js"
import LogInButton from "./LogInButton.js"

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogInClick = this.handleLogInClick.bind(this);
		this.handleLogOutClick = this.handleLogOutClick.bind(this);
		this.setColor = this.setColor.bind(this);
		this.state = {
			loggedIn: false,
			glowColor: 'rgba(55, 55, 55)'
		}
	}
	
	randomColor() {
		let x = Math.floor(Math.random()*255);
			return x;
	}
	
	setColor() {
		this.setState({glowColor: 'rgb('+this.randomColor()+','+this.randomColor()+','+this.randomColor()+')'})
	}

	
	
	handleLogInClick(){
		this.setState({loggedIn: true});
	}
	
	handleLogOutClick() {
		this.setState({loggedIn: false});
	}
	
	

	componentDidMount() {
		setInterval(this.setColor, 1500)
	}
	
	
	render() {
		const { loggedIn, glowColor }  = this.state;
		let button;
		loggedIn ? button = <LogOutButton onClick={this.handleLogOutClick} />	: button = <LogInButton onClick={this.handleLogInClick} />;
		

		
		
		return (
		<div>
			<div className="header">
				<h2>Website.com</h2>
				<nav>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Some Page</li>
						<li>Contact</li>
						<li>{button}</li>
					</ul>
				</nav>
			</div>
			<div id="glow" style={{background: glowColor}}></div>
		</div>
		)
	}
}

export default Header