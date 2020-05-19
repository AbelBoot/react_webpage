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

	const recalcPerc = (min, value, max) => {
		return Math.min(Math.max(min, value), max)
	}

	const changeTime = (e) => {
		props.handleProgress(e.nativeEvent.offsetX)
		// console.log("e.nativeEvent.offsetX", e.nativeEvent.offsetX)
		// console.log("offsetX width", trackRef.current.offsetWidth)
		// console.log("props.refProg.current.duration", props.refProg.current.duration)
		//const percent = ((e.nativeEvent.offsetX * props.refProg.current.duration)) / 100
		//console.log("percent", percent)
		
		//props.handleProgress(percent)
	}
	//const scrubTime = (e.offsetX / progress.offsetWidth)
	// * video.duration;
	return (
		<Track
			ref={trackRef} 
			onClick={(e) => changeTime(e)}>
			<Thumb 
				percentage={props.percentage}//recalcPerc(0, props.percentage, 100)}
				
				/>
		</Track>
		)
}
