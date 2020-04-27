import React from "react"
import { LocaleContext } from "./components/LocaleContext"
import styled from "styled-components"
import { AboutMeText } from "./components/Text"
import Header from "./components/Header"
import { Form } from "./components/Form"
import { A } from "./theme/SmallComp"
import pdf from "./documents/Resume.pdf"


export default class AboutMe extends React.Component {
	render(){
		return (
			<>  
    		<Header />
			<LocaleContext.Consumer>
			{localeVal => {
					if (localeVal.locale === "en"){
						return <h3>{AboutMeText[0]}</h3>
					}
					if (localeVal.locale === "fr"){
						return <h3>{AboutMeText[1]}</h3>
					}
					if (localeVal.locale === "sp"){
						return <h3>{AboutMeText[2]}</h3>
					}
					if (localeVal.locale === "pt"){
						return <h3>{AboutMeText[3]}</h3>
					}
			 	}
			}
			</LocaleContext.Consumer>
			<Form />
			<A href={pdf}>Traditional CV</A>
			</>   
			)
		}
	}