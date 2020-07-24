import React from "react"
import OpenModal from "./OpenModal"

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = {
			modalOpen: false,
		}
	}
	
	openModal() {
		let x = document.getElementsByClassName('modal');
		x[0].style.display = 'block';
		this.setState({modalOpen: !this.modalOpen,});
	}
	
	closeModal() {
		let x = document.getElementsByClassName('modal');
		x[0].style.display = 'none';
		this.setState({modalOpen: !this.modalOpen,});
	}
	
	render() {
		return (
			<div className="footer">
				<p>Here is that footer you asked for</p>
				<button onClick={this.openModal}>Open Modal</button>
				
				<p>What if there is more than one Modal though?</p>
				
				<OpenModal closeModal={this.closeModal} />
			</div>
		)
	}
}

export default Footer