import React, { useContext } from "react"
import { LocaleContext } from "./context/LocaleContext"
import styled from "styled-components"
import { ProjectText, ProjectText1 } from "./components/Text"
import { Header } from "./components/Header"
import Tabs from "./components/Tabs"
import { violet } from "./theme/variables"
import { A } from "./theme/SmallComp"
import { Icon } from "./components/Icons"
import { Part1 } from "./components/droneProject/Part1"


export const Projects = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
		return (
			<>
			{locale === "en" && <h3>{ProjectText[0]}</h3>}
			{locale === "fr" && <h3>{ProjectText[1]}</h3>}
			{locale === "sp" && <h3>{ProjectText[2]}</h3>}
			{locale === "pt" && <h3>{ProjectText[3]}</h3>}
			<Tabs>
      			<div label="Drones">
      			{locale === "en" && <h4>{ProjectText1[0]}</h4>}
				{locale === "fr" && <h4>{ProjectText1[1]}</h4>}
				{locale === "sp" && <h4>{ProjectText1[2]}</h4>}
				{locale === "pt" && <h4>{ProjectText1[3]}</h4>}
      			<A target="_blank" href="https://github.com/AbelBoot/drone"><Icon name="github" color={violet}/></A>
      			<Icon name="javascript" color={violet}/>
      			<Icon name="nodejs" width={"70"} color={violet}/>
      			<Icon name="react" color={violet}/>
      			<Part1 />
      			</div>
      			<div label="Bidding App">After a while crocodile</div>
      			<div label="Portfolio">There is nothing here</div>
    		</Tabs>
			 </>   
			)
}

