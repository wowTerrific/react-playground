import React from "react"



class TestButton extends React.Component {
	constructor(props) {
		super(props);
		this.btn1 = this.btn1.bind(this);
		this.btn2 = this.btn2.bind(this);
		this.state = {
			isBtn1: true,
		}
	}
	
	btn1() {
		this.setState({isBtn1: true,})
	}
	
	btn2() {
		this.setState({isBtn1: false,})
	}
	
	render() {
		
		
		const { isBtn1 } = this.state;
		let btn;
		isBtn1 ? (btn = <button onClick={this.btn2}>Button 1</button>) : (btn = <button onClick={this.btn1}>Button 2</button>);
		
		return (
			<div>
				{btn}
			</div>
		)
	}
}

export default TestButton