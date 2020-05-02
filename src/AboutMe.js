import React, {useContext} from "react"
import { LocaleContext } from "./context/LocaleContext"
import styled from "styled-components"
import { AboutMeText, AboutMeText1, AboutMeText2, AboutMeText3, AboutMeText4, AboutMeText5 } from "./components/Text"
import { Header } from "./components/Header"
import Tabs from "./components/Tabs"
import { Form } from "./components/Form"
import { A, Span } from "./theme/SmallComp"
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
			{locale === "en" && <h2><Span>{AboutMeText[0]}</Span></h2>}
			{locale === "fr" && <h2><Span>{AboutMeText[1]}</Span></h2>}		
			{locale === "sp" && <h2><Span>{AboutMeText[2]}</Span></h2>}	
			{locale === "pt" && <h2><Span>{AboutMeText[3]}</Span></h2>}
			<Form />
			<h5>{AboutMeText1}</h5>
			<Tabs>
				<div label="deltamethrin">
			{locale === "en" && <h5>{AboutMeText3[0]}</h5>}
			{locale === "fr" && <h5>{AboutMeText3[1]}</h5>}		
			{locale === "sp" && <h5>{AboutMeText3[2]}</h5>}	
			{locale === "pt" && <h5>{AboutMeText3[3]}</h5>}
			<A target="_blank" href="https://www.sciencedirect.com/science/article/abs/pii/S0021967315009760">Deltamethrin</A>
			<A target="_blank" href="/papers/DeltamethrinDraft.pdf">pdf</A>
			<BackgroundImageOliveOil />
				</div>
				<div label="Dibenzodiazepines">
			{locale === "en" && <h5>{AboutMeText4[0]}</h5>}
			{locale === "fr" && <h5>{AboutMeText4[1]}</h5>}		
			{locale === "sp" && <h5>{AboutMeText4[2]}</h5>}	
			{locale === "pt" && <h5>{AboutMeText4[3]}</h5>}
			<A target="_blank" href="https://pubs.rsc.org/en/content/articlelanding/2015/ra/c5ra19599c/unauth#!divAbstract">Dibenzodiazepines</A>
			<A target="_blank" href="/papers/Dibenzodiazepines.pdf">pdf</A>
			<BackgroundImagePills />
				</div>
				<div label="BenzeneActivation">
			{locale === "en" && <h5>{AboutMeText2[0]}</h5>}
			{locale === "fr" && <h5>{AboutMeText2[1]}</h5>}		
			{locale === "sp" && <h5>{AboutMeText2[2]}</h5>}	
			{locale === "pt" && <h5>{AboutMeText2[3]}</h5>}
			<A target="_blank" href="https://pubs.acs.org/doi/abs/10.1021/ja1061505">Benzene Activation</A>
			<A target="_blank" href="/papers/BenzeneActivation.pdf">pdf</A>
			<BackgroundImageChemistry />
				</div>
			</ Tabs>
			{locale === "en" && <h5>{AboutMeText2[0]}</h5>}
			{locale === "fr" && <h5>{AboutMeText2[1]}</h5>}		
			{locale === "sp" && <h5>{AboutMeText2[2]}</h5>}	
			{locale === "pt" && <h5>{AboutMeText2[3]}</h5>}
			<A target="_blank" href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=abel+locati&btnG=" ><Icon name="googleScholars" color="blue"/></A>
			<A target="_blank" href="/documents/Resume.pdf">Traditional CV</A>
			
			</>   
			)
	//	}
	}

			// 	<LocaleContext.Consumer>
			// {localeVal => {
			// 				}
			// </LocaleContext.Consumer>