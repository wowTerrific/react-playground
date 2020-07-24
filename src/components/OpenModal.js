import React from "react"


function OpenModal(props) {
	return (
		<div className="modal">
			<h3 style={{ textAlign: 'center', }}>Here is the Modal</h3>
			<button onClick={props.closeModal}>Close</button>
		</div>
	)
}

export default OpenModal