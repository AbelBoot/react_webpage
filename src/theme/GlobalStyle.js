import { createGlobalStyle } from "styled-components"
import { violet } from "./variables"

export const GlobalStyle = createGlobalStyle`
	h1, h2, h3 {
	color: white;
	background: ${violet};
	}
`

	 //  body {
  //   color: ${props => (props.whiteColor ? 'green' : 'black')};
  // }
  //font-family: 'Just Another Hand';
