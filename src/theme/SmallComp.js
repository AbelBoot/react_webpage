import styled  from "styled-components"
import { css }  from "styled-components"
import { Link } from "react-router-dom"
import { pink, grey, violet } from "./variables"


export const BigDiv = styled.div`
	display:flex;
 	justify-content: flex-end; 
  width: 100%;
  background: transparent;
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `};
 `

export const Div = styled.div`
  background: transparent;
  margin: 10px
`

export const Span = styled.span`
  display: inline;
  background-color: ${pink};
  border-radius: 5px 20px 5px;
  padding: 6px 10px 6px 10px;
`

export const SpanTab = styled.span`
  display: inline;
  border-radius: 5px 20px 5px;
  padding: 6px 10px 6px 10px;
`

export const TabContainer = styled.div`
  display: flex;
  
`
//display:flex;

export const OlTabs = styled.ol`  
  display: flex;
  ${(props) => props.maxWidth && css `
    max-width: 30px;
    ` }
  ${({justifyContent}) => justifyContent && css`
    justify-content: ${justifyContent};
  `};
  ${({flexDirection}) => flexDirection && css`
    flex-direction: ${flexDirection};
  `};
  ${({alignItems}) => alignItems && css`
    align-items: ${alignItems};
  `};
  list-style: none;
  margin: 1px;
  padding: 0.5rem 0.75rem;
`

export const ListTab = styled.li`
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `};
  ${({column}) => column && css`
    flex-direction: ${column};
  `};
  ${({alignItems}) => alignItems && css`
    align-items: ${alignItems};
  `};
  
  background-color: ${props => 
    props.selected
      ? violet
      : pink};
  border-radius: 5px 20px 5px;
  color: ${props => 
    props.selected
      ? "white"
      : grey};
  font-weight: bold;
  padding: 6px 10px 6px 10px;
  margin: .8em;
  
  
  &:hover {
    cursor: pointer;
  }
`
// flex: 0 1 auto; display: block;

export const LiActive = styled.li`
  background-color: white;
  border: solid #ccc;
  border-width: 1px 1px 0 1px;

`

 export const Button = styled.button`
 background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  
 `

export const HeaderLink = styled(Link)`
  color: ${violet};
  &:hover {
    color: black;
  }  
  font-weight: bold;
`

export const HeaderDiv = styled.div`
  box-shadow: 0px 4px 15px 0px ${pink};

`

 export const A = styled.a`
  color: black;
  text-decoration: none;
  position: relative;
  padding: 6px 10px 6px 10px;
  &:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 20%;
    width: 100%;
    background-color: ${pink};
    z-index: -1;
    transition: height .2s, background-color .2s;
  }

  &:hover:after {
    height: 60%;
    border-radius: 1px;
    background-color: ${pink};
  }
 `

 export const Index = styled.div`
  position: absolute;
  left: 0;
  h1 {
    font-size: 3em;
    color: ${grey};
    opacity: 0.4;
  }
`

// from OlTabs
//   border-bottom: ${props => 
//     props.selected 
//       ? `5px solid ${grey}`
//       : "1px solid #ccc"};

















