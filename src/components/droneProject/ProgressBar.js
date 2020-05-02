import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { violet } from "../../theme/variables"

const Track = styled.div`
	width: 100px;
	height: 20px;
	background-color: pink;
	border-radius: 10px;
`

const Thumb = styled.div`
	width: ${props => props.percentage}px;
	height: 100%;
	background-color: ${violet};
	border-radius: 10px;
`

export const ProgressBar = (props) => {
	// useEffect((e) => {
	// 	
	// }, )
	const trackRef = useRef()
	const changeTime = (e) => {
		props.handleProgress(e.nativeEvent.offsetX)
	}
	return (
		<Track
			ref={trackRef} 
			onClick={(e) => changeTime(e)}>
			<Thumb 
				percentage={props.percentage}
				
				/>
		</Track>
		)
}
