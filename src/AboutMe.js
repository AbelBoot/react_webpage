import React, {useContext} from "react"
import { LocaleContext } from "./context/LocaleContext"
import styled from "styled-components"
import { AboutMeText, AboutMeText1, AboutMeText2, AboutMeText3, AboutMeText4, AboutMeText5 } from "./components/Text"
import { Header } from "./components/Header"
import Tabs from "./components/Tabs"
import { FormComp } from "./components/Form"
import { A, Span, Div } from "./theme/SmallComp"
import { AboutMeContainer } from "./theme/Containers"
import { AboutMeDiv1, AboutMeDiv2, AboutMeDiv3, AboutMeDiv4 } from "./theme/AboutMeStyle"
import { BackgroundImageChemistry, BackgroundImageOliveOil, BackgroundImagePills } from "./theme/GlobalStyle"
//import pdf from "/Resume.pdf"
//import pdfPapers  from "/Dibenzodiazepines.pdf"
import { Icon } from "./components/Icons"


//export default class AboutMe extends React.Component {
export const AboutMe = () => {
	//render(){
		const { locale } = useContext(LocaleContext)
		return (
			<>  

			<AboutMeContainer>
			<AboutMeDiv1>
			{locale === "en" && <h5>{AboutMeText1[0]}</h5>}
			{locale === "fr" && <h5>{AboutMeText1[1]}</h5>}		
			{locale === "sp" && <h5>{AboutMeText1[2]}</h5>}	
			{locale === "pt" && <h5>{AboutMeText1[3]}</h5>}
			</AboutMeDiv1>
			<AboutMeDiv2>
			<FormComp />
			</AboutMeDiv2>
			<AboutMeDiv3>
			{locale === "en" && <h5>{AboutMeText2[0]}</h5>}
			{locale === "fr" && <h5>{AboutMeText2[1]}</h5>}		
			{locale === "sp" && <h5>{AboutMeText2[2]}</h5>}	
			{locale === "pt" && <h5>{AboutMeText2[3]}</h5>}
			</AboutMeDiv3>
			<Div>

			</Div>
			</AboutMeContainer>
			</>   
			)
	//	}
	}

			// 	<LocaleContext.Consumer>
			// {localeVal => {
			// 				}
			// </LocaleContext.Consumer>
						// {locale === "en" && <h2><Span>{AboutMeText[0]}</Span></h2>}
			// {locale === "fr" && <h2><Span>{AboutMeText[1]}</Span></h2>}		
			// {locale === "sp" && <h2><Span>{AboutMeText[2]}</Span></h2>}	
			// {locale === "pt" && <h2><Span>{AboutMeText[3]}</Span></h2>}