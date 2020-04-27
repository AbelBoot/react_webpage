import React from "react"
import styled from "styled-components"
import { pink } from "./variables"


export const BigDiv = styled.button`
	display:flex;
 	justify-content: flex-end; 
  	width: 100%;
  	background: transparent;
  	border-radius: 3px;
  	border: .5px solid black;
 `

 export const Div = styled.button`
	background: transparent;
  	border-radius: 3px;
  	border: .5px solid black;
 `

 export const Span = styled.button`
	background: transparent;
  	border-radius: 3px;
  	border: .5px solid green;
 `

export const OlTabs = styled.ol`
	  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
`

export const ListTab = styled.li`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`

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

 export const A = styled.a`
  color: black;
  text-decoration: none;
  position: relative;

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
    background-color: ${pink};
  }





 `

















