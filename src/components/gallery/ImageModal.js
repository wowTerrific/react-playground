import React from "react"

function ImageModal(props) {
	return (
		<div className="modal-img" 
			onClick={props.handleClick}
			style={{ display: props.display }}
		>
			<img src={props.source} alt={props.description} />
		</div>
	)
}

export default ImageModal


/*

<div className="img-modal">
	<div className="slide-cont">
		{props.children}
	</div>
	<div className="slide-nav">
		<div className="slide-nav-prev">&#8249;</div>
		<div className="slide-nav-next">&#8250;</div>
	</div>
	<div className="slide-indicate">
		{props.length //not sure how to do this one yet or if I should leave it out}
	</div>
</div>


--- children buildout ---


function ModalSlide(props) {

	return (
	<div className="slide" key={props.id}>
		<img src={props.source} alt={props.decription} key={props.id} />
	</div>

	)
}

<ImageModal>
{dataArray.map((slide) => <ModalSlide id={slide.id} source={slide.source) description={slide.description} />
</ImageModal>



check out owlcarousel2 for touch-enabled and responsive ideas, tutorials if needed - would prefer to code my own - create api

*/