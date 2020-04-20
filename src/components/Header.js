import React from "react"
import styled from "styled-components"
import { LocaleContext } from "./LocaleContext"
import { Div, BigDiv } from "./SmallComp"

export default class Header extends React.Component {
	render(){
		return (
			<>
			
			<LocaleContext.Consumer>
			{value => (
        	<>
			<BigDiv>
			<Div onClick={value.updateLocale.bind(null, "fr")}>🇫🇷</Div>
			<Div onClick={value.updateLocale.bind(null, "en")}>🇬🇧</Div>
			<Div onClick={value.updateLocale.bind(null, "sp")}>🇪🇸</Div>
			<Div onClick={value.updateLocale.bind(null, "pt")}>🇵🇹</Div>
			</BigDiv>
			</>
			)}
			</LocaleContext.Consumer>
			</>
			)
	}
}

//<button onClick={localeVal.updateLocale}>Change language</button>	
// onClick={value.updateLocale.bind("french")}
//data-lang={"fr"}