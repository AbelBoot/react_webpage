import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { LocaleContext } from "../context/LocaleContext"
import { Div, BigDiv, Span, HeaderLink, HeaderDiv } from "../theme/SmallComp"

export const Header = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
		return (
			 <>
			 <HeaderDiv>
			<BigDiv>
			<HeaderLink to="/" style={{textDecoration: "none", marginTop: "4px"}}><Div> Home </Div></HeaderLink>
			<HeaderLink to="/projects" style={{textDecoration: "none", marginTop: "4px"}}><Div> Projects </Div></HeaderLink>
			
			<Div onClick={updateLocale.bind(null, "fr")}>🇫🇷</Div>
			<Div onClick={updateLocale.bind(null, "en")}>🇬🇧</Div>
			<Div onClick={updateLocale.bind(null, "sp")}>🇪🇸</Div>
			<Div onClick={updateLocale.bind(null, "pt")}>🇵🇹</Div>
			</BigDiv>
			</HeaderDiv>
			</>
			)
}

//<button onClick={localeVal.updateLocale}>Change language</button>	
// onClick={value.updateLocale.bind("french")}
//data-lang={"fr"}
// <HeaderLink to="/about" style={{textDecoration: "none", marginTop: "4px"}}><Div> About Me </Div></HeaderLink>