import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import TestButton from "./components/TestButton"

import GalleryOne from "./components/gallery/gallery-one/GalleryOne"

import "./styles/app.css"



class App extends React.Component {
	render() {

	
	  return (
		<div className="App">
			<Header />
			<div style={{
				height: 'auto', 
				minHeight: '85vh', 
				width: '100%', 
				maxWidth: '1200px', 
				margin: '4% auto 0 auto', 
				padding: '5%',
				boxSizing: 'border-box',
			}}>
				{/*main content*/}
				<p>Here is where I ended the react Docs <br />
				<a href="https://reactjs.org/docs/forms.html" target="_blank">Forms</a></p>
				<p style={{fontSize: '30px',}}>Image modal works, next step is to create a carousel.</p>
				<GalleryOne />

				<TestButton />
			</div>
			<Footer />
		</div>
	  );
	}
}

export default App;
