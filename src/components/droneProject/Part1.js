import React, {useRef, useState} from "react"
import { Div, BigDiv, Span, Index,} from "../../theme/SmallComp"
import { Container, Relative, Flex } from "../../theme/Containers"
import ReactPlayer from "react-player"
import { Icon } from "../Icons"
import {violet} from "../../theme/variables"
import { Controls } from "./Controls"

//export default class Part1 extends React.Component {
export const Part1 = () => {
	const videoRef = useRef()
	//need that to re-render (?)
	const [isPaused, setVal] = useState(true)
	
		return (
			<>
			<Container>
			<Relative>
			<h3>Set up of the Project</h3>
			<Index>
				<h1>01</h1>
			</Index>
			<Flex justify={"space-around"}>
			<ReactPlayer 
				url="VideoTest1.mkv"
				controls
				width="400px"
			/>
			<ReactPlayer 
				url="VideoTest2.mkv"
				controls
				width="400px"
			/>
			<ReactPlayer 
				url="VideoTest3.mkv"
				controls
				width="400px"
			/>
			<video 
				ref={videoRef}
				width="200px"
				height="100px"
				src="VideoTest3.mkv"
			>
			</video>
			
		<div onClick={() => {
					videoRef.current.paused 
					? videoRef.current.play()
					: videoRef.current.pause()
					setVal(!isPaused)
				}
			}>
			{(!videoRef.current || 
				(videoRef.current 
				&& videoRef.current.paused === true)
				)
				? <Icon name="play3" color={violet}/>
				: <Icon name="pause2" color={violet}/>
			}
			</div>
			<div onClick={() => {
				videoRef.current.currentTime = 0
				videoRef.current.pause()
				setVal(!isPaused)
			}}>
				{<Icon name="stop2" color={violet}/>}	
			</div>
			<div onClick={() => {
				videoRef.current.currentTime -= 10
			}}>
				{<Icon name="backward2" color={violet}/>}	
			</div>
			<div onClick={() => {
				videoRef.current.currentTime += 10
				console.log("volume", videoRef.current.volume)
				videoRef.current.volume -= .1
			}}>
				{<Icon name="forward3" color={violet}/>}	
		</div>

			
			
			</Flex>
			</Relative>
			</Container>
			</>
			)	
}
//{videoRef.current && 

			// <input 
			// 	type="range"
			// 	name="volume"
			// 	min="0"
			// 	max="10"
			// 	step="0.05"
			// 	value="1"
			// 	onChange={}
			// 	/>