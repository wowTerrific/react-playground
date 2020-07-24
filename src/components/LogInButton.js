import React from "react"
import "../styles/log-btn.css"

function LogInButton(props) {
	return (
		<button className="log-btn" onClick={props.onClick}>
			Log In
		</button>
	)
}

export default LogInButton