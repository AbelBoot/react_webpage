import styled, { createGlobalStyle, keyframes } from "styled-components"
import { violet, pink } from "./variables"
//import Background from "./public/background_sky.jpg"

export const GlobalStyle = createGlobalStyle`
	h2, h3 {
	color: black};

`

export const BackgroundImageDrone = styled.div`
	
	bottom: 0vw;
	right: 0vw;
	width: 35vw;
	height: 25vh;
	background-image: url("./drone_drawing.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	z-index: -99;
`
//position: fixed;

export const BackgroundImageMoney = styled.div`
	
	bottom: 1vw;
	right: 1vw;
	width: 20vw;
	height: 15vh;
	background-image: url("./money3.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	z-index: -99;
`

const reactAnimation = keyframes`
	from { transform: rotate(0deg); }
  	to { transform: rotate(360deg); }
`

export const BackgroundImageReact = styled.div`
	width: 15vw;
	height: 15vh;
	
	border: transparent;
	background-image: url("./reactGifLogo.svg");
	background-repeat: no-repeat;
	animation: ${reactAnimation} infinite 20s linear;
`
//	bottom: 1vw; right: 1vw; background-size: cover;
//z-index: -99;
export const BackgroundImagePills = styled.div`
	
	bottom: 2vw;
	right: 5vw;
	width: 40vw;
	height: 30vh;
	background-image: url("./pills1.png");
	background-size: cover;
	background-repeat: no-repeat;
	z-index: -99;
`

export const BackgroundImageOliveOil = styled.div`
	
	bottom: 2vw;
	right: 5vw;
	width: 30vw;
	height: 30vh;
	background-image: url("./oliveoil.png");
	background-size: cover;
	background-repeat: no-repeat;
	z-index: -99;
`

export const BackgroundImageChemistry = styled.div`
	
	bottom: 2vw;
	right: 5vw;
	width: 30vw;
	height: 35vh;
	background-image: url("./glassware2.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	z-index: -99;
`

	 //  body {
  //   color: ${props => (props.whiteColor ? 'green' : 'black')};
  // }
  //font-family: 'Just Another Hand';
