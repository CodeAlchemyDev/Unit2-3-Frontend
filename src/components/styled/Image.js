import React from 'react';

export default function Image(props){
	const imageCon = {
		backgroundImage: `url(${props.url})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		backgroundFit: 'center center',
		marginRight: '10px',
		marginTop: '5px',
		height: `${props.height}`,
		width: `${props.width}`,
		margin: `${props.margin}`
	}
	return <div style={imageCon}></div>
}

