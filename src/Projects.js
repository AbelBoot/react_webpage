import React, { useContext } from "react"
import { LocaleContext } from "./context/LocaleContext"
import styled from "styled-components"
import { ProjectText, ProjectTextD1, ProjectTextB1, ProjectTextP1 } from "./components/Text"
import { Header } from "./components/Header"
import Tabs from "./components/Tabs"
import { violet } from "./theme/variables"
import { A, Span } from "./theme/SmallComp"
import { Icon } from "./components/Icons"
import { Part1 } from "./components/droneProject/Part1"
import { BackgroundImageDrone, BackgroundImageMoney, BackgroundImageReact } from "./theme/GlobalStyle"


export const Projects = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
		return (
			<>
			{locale === "en" && <h2><Span>{ProjectText[0]}</Span></h2>}
			{locale === "fr" && <h2><Span>{ProjectText[1]}</Span></h2>}
			{locale === "sp" && <h2><Span>{ProjectText[2]}</Span></h2>}
			{locale === "pt" && <h2><Span>{ProjectText[3]}</Span></h2>}
			<Tabs>
      			<div label="Drones">
      			<BackgroundImageDrone />
      			{locale === "en" && <h4>{ProjectTextD1[0]}</h4>}
				{locale === "fr" && <h4>{ProjectTextD1[1]}</h4>}
				{locale === "sp" && <h4>{ProjectTextD1[2]}</h4>}
				{locale === "pt" && <h4>{ProjectTextD1[3]}</h4>}
      			<A target="_blank" href="https://github.com/AbelBoot/drone"><Icon name="github" color={violet}/></A>
      			<Icon name="javascript" color={violet}/>
      			<Icon name="nodejs" width={"70"} color={violet}/>
      			<Icon name="react" color={violet}/>
      			<Part1 />
      			</div>
      			<div label="Bidding App">
      			<BackgroundImageMoney />
      			{locale === "en" && <h4>{ProjectTextB1[0]}</h4>}
				{locale === "fr" && <h4>{ProjectTextB1[1]}</h4>}
				{locale === "sp" && <h4>{ProjectTextB1[2]}</h4>}
				{locale === "pt" && <h4>{ProjectTextB1[3]}</h4>}
      			<A target="_blank" href="https://github.com/AbelBoot/drone"><Icon name="github" color={violet}/></A>
      			<Icon name="javascript" color={violet}/>
      			<Icon name="rails" width={"70"} color={violet}/>
      			</div>
      			<div label="Portfolio">
      			<BackgroundImageReact />
				{locale === "en" && <h4>{ProjectTextP1[0]}</h4>}
				{locale === "fr" && <h4>{ProjectTextP1[1]}</h4>}
				{locale === "sp" && <h4>{ProjectTextP1[2]}</h4>}
				{locale === "pt" && <h4>{ProjectTextP1[3]}</h4>}
      			<A target="_blank" href="https://github.com/AbelBoot/drone"><Icon name="github" color={violet}/></A>
      			<Icon name="javascript" color={violet}/>
      			<Icon name="react" color={violet}/>
      			</div>
    		</Tabs>
			 </>   
			)
}

