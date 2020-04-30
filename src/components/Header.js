import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { LocaleContext } from "../context/LocaleContext"
import { Div, BigDiv, Span } from "../theme/SmallComp"

export const Header = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
		return (
			 <>
			<BigDiv>
			<Link to="/"><Span>Home</Span></Link>
			<Link to="/projects"><Span>Projects</Span></Link>
			<Link to="/about"><Span>About Me</Span></Link>
			<Div onClick={updateLocale.bind(null, "fr")}>🇫🇷</Div>
			<Div onClick={updateLocale.bind(null, "en")}>🇬🇧</Div>
			<Div onClick={updateLocale.bind(null, "sp")}>🇪🇸</Div>
			<Div onClick={updateLocale.bind(null, "pt")}>🇵🇹</Div>
			</BigDiv>
			</>
			)
}

//<button onClick={localeVal.updateLocale}>Change language</button>	
// onClick={value.updateLocale.bind("french")}
//data-lang={"fr"}