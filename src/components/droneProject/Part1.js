import React, {useRef, useState, useEffect} from "react"
import { Div, BigDiv, Span, Index,} from "../../theme/SmallComp"
import { Container, Relative, Flex } from "../../theme/Containers"
import ReactPlayer from "react-player"
import { Icon } from "../Icons"
import {violet} from "../../theme/variables"
import { Controls } from "./Controls"
import { ProgressBar } from "./ProgressBar"

const useDebounce = (value, timeout) => {
    const [state, setState] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setState(value), timeout);
        return () => clearTimeout(handler);
    }, [value, timeout]);
    return state;
}


export const Part1 = () => {

	const videoRef = useRef()
	const volRef = useRef()
	const progressRef = useRef()

	const [isPaused, setVal] = useState(true)
	//need that to re-render (?)
	const [volVal, setvolVal] = useState(1)
	const [progressVal, setprogressVal] = useState(0)
	const [playByClick, setplayByClick] = useState(progressVal)
	const debouncedProgressVal = useDebounce(progressVal, 1000)
	const handleProgress = (playByClick) => {	
		console.log("click", playByClick)
		if (playByClick){
			setplayByClick(playByClick)
			setprogressVal(playByClick)
		} else {
		//setprogressVal(progressVal + 10)
		//console.log("progressVal", progressVal)
		//console.log("video duration", videoRef.current.duration)
		//console.log("video currentTime", videoRef.current.currentTime)
		const percent = ((videoRef.current.currentTime / videoRef.current.duration)) * 100
		//console.log("percent", percent)
		setprogressVal(percent)
	}
	}
	const changeVol = (e) => {
		//working but it should rerender!!
		setvolVal(e.target.value)
		videoRef.current.volume = volVal
	}
	useEffect(() => {
		videoRef.current.addEventListener("timeupdate", () => {
		handleProgress()
	})
	}, [debouncedProgressVal])

		return (
			<>
			<h3>Set up of the Project</h3>
			<Index>
				<h1>01</h1>
			</Index>
			
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
			<div
				ref={progressRef}
				//onClick={(e) => handleProgress(e)}
			>
			<ProgressBar 
				//check below if necessary
				percentage={playByClick ? playByClick : progressVal}
				handleProgress={handleProgress}
			/>	
			</div>
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
				
			}}>
				{<Icon name="forward3" color={violet}/>}	
			</div>
			<div onClick={() => {
				}}>

			<input 
				ref={volRef}
				type="range"
				name="volume"
				min="0"
				max="1"
				step="0.1"
				value={volVal}
				onChange={(e) => changeVol(e)}	
				/>
			</div>
			</>
			)	
}

//<Flex justify={"space-around"}>
//{videoRef.current && 
// onChange={(e) => {
// 					changeVol(e)
// 				}
			// <input 
			// 	type="range"
			// 	name="volume"
			// 	min="0"
			// 	max="10"
			// 	step="0.05"
			// 	value="1"
			// 	onChange={}
			// 	/>