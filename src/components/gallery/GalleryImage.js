import React from "react"

function GalleryImage(props) {
	return (
		<div className="gallery-img" style={{
			background: 'url(' + props.source + ')',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
		}}  onClick={props.handleClick}
			data-source={props.source}>
		</div>
	)
}

export default GalleryImage