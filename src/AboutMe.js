import React, {useContext} from "react"
import { LocaleContext } from "./context/LocaleContext"
import styled from "styled-components"
import { AboutMeText, AboutMeText1, AboutMeText2 } from "./components/Text"
import { Header } from "./components/Header"
import Tabs from "./components/Tabs"
import { Form } from "./components/Form"
import { A } from "./theme/SmallComp"
//import pdf from "/Resume.pdf"
//import pdfPapers  from "/Dibenzodiazepines.pdf"
import { Icon } from "./components/Icons"


//export default class AboutMe extends React.Component {
export const AboutMe = () => {
	//render(){
		const { locale } = useContext(LocaleContext)
		return (
			<>  
    		

					{locale === "en" ?
						 <h3>{AboutMeText[0]}</h3>
					: null}
					{locale === "fr" ?
						
					 <h3>{AboutMeText[1]}</h3>
					  : null}
					
					{locale === "sp" ?
						 <h3>{AboutMeText[2]}</h3>
					: null}
					{locale === "pt" ?
						 <h3>{AboutMeText[3]}</h3>
					: null
			 	}


			<Form />
			<h5>{AboutMeText1}</h5>
			<Tabs>
				<div label="deltamethrin">
			<A target="_blank" href="https://www.sciencedirect.com/science/article/abs/pii/S0021967315009760">Deltamethrin</A>
			<A target="_blank" href="/papers/DeltamethrinDraft.pdf">pdf</A>
				</div>
				<div label="Dibenzodiazepines">
			<A target="_blank" href="https://pubs.rsc.org/en/content/articlelanding/2015/ra/c5ra19599c/unauth#!divAbstract">Dibenzodiazepines</A>
			<A target="_blank" href="/papers/Dibenzodiazepines.pdf">pdf</A>
				</div>
				<div label="BenzeneActivation">
			<A target="_blank" href="https://pubs.acs.org/doi/abs/10.1021/ja1061505">Benzene Activation</A>
			<A target="_blank" href="/papers/BenzeneActivation.pdf">pdf</A>
				</div>
			</ Tabs>
			<h5>{AboutMeText2}</h5>
			<A target="_blank" href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=abel+locati&btnG=" ><Icon name="googleScholars" color="blue"/></A>
			<A href="/documents/Resume.pdf">Traditional CV</A>
			</>   
			)
	//	}
	}

			// 	<LocaleContext.Consumer>
			// {localeVal => {
			// 				}
			// </LocaleContext.Consumer>