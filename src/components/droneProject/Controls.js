import React, {useState} from "react"
import { Icon } from "../Icons"
import {violet} from "../../theme/variables"


export const Controls = (props, {videoRef}) => {
	const [isPaused, setVal] = useState(true)
	return (
		<>
		
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
		</>
		)

		// <div onClick={() => {
		// 			videoRef.current.paused 
		// 			? videoRef.current.play()
		// 			: videoRef.current.pause()
		// 			setVal(!isPaused)
		// 		}
		// 	}>
		// 	{(!videoRef.current || 
		// 		(videoRef.current 
		// 		&& videoRef.current.paused === true)
		// 		)
		// 		? <Icon name="play3" color={violet}/>
		// 		: <Icon name="pause2" color={violet}/>
		// 	}
		// 	</div>
		// 	<div onClick={() => {
		// 		videoRef.current.currentTime = 0
		// 		videoRef.current.pause()
		// 		setVal(!isPaused)
		// 	}}>
		// 		{<Icon name="stop2" color={violet}/>}	
		// 	</div>
		// 	<div onClick={() => {
		// 		videoRef.current.currentTime -= 10
		// 	}}>
		// 		{<Icon name="backward2" color={violet}/>}	
		// 	</div>
		// 	<div onClick={() => {
		// 		videoRef.current.currentTime += 10
		// 		console.log("volume", videoRef.current.volume)
		// 		videoRef.current.volume -= .1
		// 	}}>
		// 		{<Icon name="forward3" color={violet}/>}	
		// </div>
}