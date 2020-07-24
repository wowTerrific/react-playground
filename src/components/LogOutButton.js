import React from "react"
import "../styles/log-btn.css"

function LogOutButton(props) {
	return (
		<button className="log-btn" onClick={props.onClick}>
			Log Out
		</button>
	)
}

export default LogOutButton