import React from "react"

import GalleryImage from "../GalleryImage"
import GalleryContainer from "../GalleryContainer"
import ImageModal from "../ImageModal"

import galleryOne from "../../../data/galleryOne.js"
import "../../../styles/gallery.css"

class GalleryOne extends React.Component {
	constructor(props) {
		super(props);
		this.imgClick = this.imgClick.bind(this);
		this.imgClickOff = this.imgClickOff.bind(this);
		this.state = {
			isModal: false,
			modalSrc: '',
		}
	}
	
	imgClick(e) {
		let imgSource = e.target.dataset.source;
		if (!this.state.isModal) {
			this.setState({
				isModal: !this.state.isModal,
				modalSrc: imgSource,
			}, () => console.log(this.state.modalSrc))
		}
	}
	
	imgClickOff() {
		this.setState({
			isModal: !this.state.isModal,
			modalSrc: '',
		})
	}
	
	render() {
		const { isModal, modalSrc } = this.state;
		
		const gallery = galleryOne.map((img) => 
			<GalleryImage
				source={img.source}
				data-source={img.source}
				handleClick={this.imgClick}
				key={img.id}
			/>
		);
		
		let popImage;
		modalSrc ? 
			popImage = <ImageModal source={modalSrc} display="flex" handleClick={this.imgClickOff} />
			:
			popImage = <ImageModal source={modalSrc} display="none" handleClick={this.imgClickOff} />
		
		return (
			<div>
				<GalleryContainer>
					{gallery}
					{popImage}
				</GalleryContainer>
			</div>
		)
	}
}

export default GalleryOne