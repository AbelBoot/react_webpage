import React, { useContext } from "react"
import { LocaleContext } from "./context/LocaleContext"
import styled from "styled-components"
import { ProjectText, ProjectTextD1, ProjectTextB1, ProjectTextP1 } from "./components/Text"
import { ProjectsChem1, ProjectsChem2, ProjectsChem3 } from "./components/Text"
import { Header } from "./components/Header"
import Tabs from "./components/Tabs"
import { violet } from "./theme/variables"
import { A, Span } from "./theme/SmallComp"
import { Icon } from "./components/Icons"
import { Part1 } from "./components/droneProject/Part1"
import { Container, ProjectContainer, ProjectChemistryContainer } from "./theme/Containers"
import { BackgroundImageDrone, BackgroundImageMoney, BackgroundImageReact } from "./theme/GlobalStyle"
import { BackgroundImageChemistry, BackgroundImageOliveOil, BackgroundImagePills } from "./theme/GlobalStyle"



export const Projects = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
		return (
			<>
			
			{locale === "en" && <h2><Span>{ProjectText[0]}</Span></h2>}
			{locale === "fr" && <h2><Span>{ProjectText[1]}</Span></h2>}
			{locale === "sp" && <h2><Span>{ProjectText[2]}</Span></h2>}
			{locale === "pt" && <h2><Span>{ProjectText[3]}</Span></h2>}
			<ProjectContainer>
			<Tabs maxWidth="30px">
      			<div label="Drones">
      			{locale === "en" && <h4>{ProjectTextD1[0]}</h4>}
				{locale === "fr" && <h4>{ProjectTextD1[1]}</h4>}
				{locale === "sp" && <h4>{ProjectTextD1[2]}</h4>}
				{locale === "pt" && <h4>{ProjectTextD1[3]}</h4>}
      			<A target="_blank" href="https://github.com/AbelBoot/drone"><Icon name="github" color={violet}/></A>
      			<Icon name="javascript" color={violet}/>
      			<Icon name="nodejs" width={"70"} color={violet}/>
      			<Icon name="react" color={violet}/>
      			<Part1 />
      			<BackgroundImageDrone />
      			</div>
      			<div label="Auction">
      			{locale === "en" && <h4>{ProjectTextB1[0]}</h4>}
				{locale === "fr" && <h4>{ProjectTextB1[1]}</h4>}
				{locale === "sp" && <h4>{ProjectTextB1[2]}</h4>}
				{locale === "pt" && <h4>{ProjectTextB1[3]}</h4>}
      			<A target="_blank" href="https://github.com/AbelBoot/drone"><Icon name="github" color={violet}/></A>
      			<Icon name="javascript" color={violet}/>
      			<Icon name="rails" width={"70"} color={violet}/>
      			<BackgroundImageMoney />
      			</div>
      			<div label="Portfolio">
				{locale === "en" && <h4>{ProjectTextP1[0]}</h4>}
				{locale === "fr" && <h4>{ProjectTextP1[1]}</h4>}
				{locale === "sp" && <h4>{ProjectTextP1[2]}</h4>}
				{locale === "pt" && <h4>{ProjectTextP1[3]}</h4>}
      			<A target="_blank" href="https://github.com/AbelBoot/drone"><Icon name="github" color={violet}/></A>
      			<Icon name="javascript" color={violet}/>
      			<Icon name="react" color={violet}/>
      			<BackgroundImageReact />
      			</div>
      			
      			<div label="Chemistry">
      			<ProjectChemistryContainer>
				<Tabs alignItems="center">
				<div label="deltamethrin">
			{locale === "en" && <h5>{ProjectsChem1[0]}</h5>}
			{locale === "fr" && <h5>{ProjectsChem1[1]}</h5>}		
			{locale === "sp" && <h5>{ProjectsChem1[2]}</h5>}	
			{locale === "pt" && <h5>{ProjectsChem1[3]}</h5>}
			<A target="_blank" href="https://www.sciencedirect.com/science/article/abs/pii/S0021967315009760">Deltamethrin</A>
			<A target="_blank" href="/papers/DeltamethrinDraft.pdf">pdf</A>
			<BackgroundImageOliveOil />
				</div>
				<div label="Dibenzodiazepines">
			{locale === "en" && <h5>{ProjectsChem2[0]}</h5>}
			{locale === "fr" && <h5>{ProjectsChem2[1]}</h5>}		
			{locale === "sp" && <h5>{ProjectsChem2[2]}</h5>}	
			{locale === "pt" && <h5>{ProjectsChem2[3]}</h5>}
			<A target="_blank" href="https://pubs.rsc.org/en/content/articlelanding/2015/ra/c5ra19599c/unauth#!divAbstract">Dibenzodiazepines</A>
			<A target="_blank" href="/papers/Dibenzodiazepines.pdf">pdf</A>
			<BackgroundImagePills />
				</div>
				<div label="BenzeneActivation">
			{locale === "en" && <h5>{ProjectsChem3[0]}</h5>}
			{locale === "fr" && <h5>{ProjectsChem3[1]}</h5>}		
			{locale === "sp" && <h5>{ProjectsChem3[2]}</h5>}	
			{locale === "pt" && <h5>{ProjectsChem3[3]}</h5>}
			<A target="_blank" href="https://pubs.acs.org/doi/abs/10.1021/ja1061505">Benzene Activation</A>
			<A target="_blank" href="/papers/BenzeneActivation.pdf">pdf</A>
			<BackgroundImageChemistry />
				</div>
			</ Tabs>
			</ProjectChemistryContainer>
      			</div>

    		</Tabs>
    		</ProjectContainer>
    		
			 </>   
			)
}

