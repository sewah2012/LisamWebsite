import './InfoBox.css';
import React from 'react'

const InfoBox = ({bgImage, text}) => {
	const styles = {
		backgroundColor: 'blue',
		backgroundImage: `url('assets/imgs/${bgImage}')`,
		backgroundSize: 'cover',
		bacgroundRepeat: 'no-repeat',
		width: '23rem',
		height: '15rem',
		position: 'relative',
		margin: '1.5rem',
		borderTopLeftRadius: '25pt',
		borderTopRightRadius: '25pt',

	}
	return (
		<div style = {styles}>
			<div className = 'infoBox__text'>
				<h2>{text}</h2>
			</div>
		</div>
	)
}

export default InfoBox