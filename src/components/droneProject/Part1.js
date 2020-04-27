import React from "react"
import { Div, BigDiv, Span, Index,} from "../../theme/SmallComp"
import { Container, Relative, Flex } from "../../theme/Containers"
import ReactPlayer from "react-player"

export default class Part1 extends React.Component {
	render(){
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
			</Flex>
			</Relative>
			</Container>
			</>
			)
	}
}