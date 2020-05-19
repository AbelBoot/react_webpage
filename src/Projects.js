import React, { useContext } from "react"
import { LocaleContext } from "./context/LocaleContext"
import styled from "styled-components"
import { ProjectText, ProjectTextD1, ProjectTextB1, ProjectTextP1 } from "./components/Text"
import { ProjectsChem0, ProjectsChem1, ProjectsChem2, ProjectsChem3, ProjectsChem4 } from "./components/Text"
import { Header } from "./components/Header"
import Tabs from "./components/Tabs"
import { violet } from "./theme/variables"
import { A, Span } from "./theme/SmallComp"
import { Icon } from "./components/Icons"
import { Part1 } from "./components/droneProject/Part1"
import { Container, ProjectContainer, ProjectDronesContainer, ProjectAuctionContainer, ProjectPortfolioContainer, ProjectChemistryContainer } from "./theme/Containers"
import { ProjectChemDiv1, ProjectChemDiv2, ProjectChemDiv3 } from "./theme/ProjectChemStyle"
import { ProjectPortfolioDiv1, ProjectPortfolioDiv2, ProjectPortfolioDiv3, ProjectPortfolioDiv4 } from "./theme/ProjectPortfolioStyle"
import { ProjectAuctionDiv1, ProjectAuctionDiv2, ProjectAuctionDiv3, ProjectAuctionDiv4 } from "./theme/ProjectAuctionStyle"
import { ProjectDronesDiv1, ProjectDronesDiv2, ProjectDronesDiv3, ProjectDronesDiv4 } from "./theme/ProjectDronesStyle"
import { BackgroundImageDrone, BackgroundImageMoney, BackgroundImageReact } from "./theme/GlobalStyle"
import { BackgroundImageChemistry, BackgroundImageOliveOil, BackgroundImagePills } from "./theme/GlobalStyle"

//for chemistry tab <Tabs alignItems="center">

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
      			<ProjectDronesContainer>
      			<ProjectDronesDiv1>
      			{locale === "en" && <h4>{ProjectTextD1[0]}</h4>}
				{locale === "fr" && <h4>{ProjectTextD1[1]}</h4>}
				{locale === "sp" && <h4>{ProjectTextD1[2]}</h4>}
				{locale === "pt" && <h4>{ProjectTextD1[3]}</h4>}
				</ProjectDronesDiv1>
				<ProjectDronesDiv2>
      			<A target="_blank" href="https://github.com/AbelBoot/drone"><Icon name="github" color={violet}/></A>
      			<Icon name="javascript" color={violet}/>
      			<Icon name="nodejs" width={"70"} color={violet}/>
      			<Icon name="react" color={violet}/>
      			</ProjectDronesDiv2>
      			<ProjectDronesDiv3>
      			<Part1 />
      			</ProjectDronesDiv3>
      			<ProjectDronesDiv4>
      			<BackgroundImageDrone />
      			</ProjectDronesDiv4>
      			</ProjectDronesContainer>
      			</div>

      			<div label="Auction">
      			<ProjectAuctionContainer>
      			<ProjectAuctionDiv1>
      			{locale === "en" && <h4>{ProjectTextB1[0]}</h4>}
				{locale === "fr" && <h4>{ProjectTextB1[1]}</h4>}
				{locale === "sp" && <h4>{ProjectTextB1[2]}</h4>}
				{locale === "pt" && <h4>{ProjectTextB1[3]}</h4>}
				</ProjectAuctionDiv1>
				<ProjectAuctionDiv2>
      			<A target="_blank" href="https://github.com/AbelBoot/drone"><Icon name="github" color={violet}/></A>
      			<Icon name="javascript" color={violet}/>
      			<Icon name="rails" width={"70"} color={violet}/>
      			</ProjectAuctionDiv2>
      			<ProjectAuctionDiv3>
      			<BackgroundImageMoney />
      			</ProjectAuctionDiv3>
      			</ProjectAuctionContainer>
      			</div>
      			
      			<div label="Portfolio">
      			<ProjectPortfolioContainer>
      			<ProjectPortfolioDiv1>
				{locale === "en" && <h4>{ProjectTextP1[0]}</h4>}
				{locale === "fr" && <h4>{ProjectTextP1[1]}</h4>}
				{locale === "sp" && <h4>{ProjectTextP1[2]}</h4>}
				{locale === "pt" && <h4>{ProjectTextP1[3]}</h4>}
				</ProjectPortfolioDiv1>
				<ProjectPortfolioDiv2>
      			<A target="_blank" href="https://github.com/AbelBoot/drone"><Icon name="github" color={violet}/></A>
      			<Icon name="react" color={violet}/>
      			<Icon name="javascript" color={violet}/>
      			</ProjectPortfolioDiv2>
				<ProjectPortfolioDiv3>      			
      			<BackgroundImageReact />
				</ProjectPortfolioDiv3>      			
      			
      			</ProjectPortfolioContainer>
      			</div>
      			
      			<div label="Chemistry">
      			<ProjectChemistryContainer>
      		<ProjectChemDiv1>
      		{locale === "en" && <h5>{ProjectsChem0[0]}</h5>}
			{locale === "fr" && <h5>{ProjectsChem0[1]}</h5>}		
			{locale === "sp" && <h5>{ProjectsChem0[2]}</h5>}	
			{locale === "pt" && <h5>{ProjectsChem0[3]}</h5>}	
			</ProjectChemDiv1>
			<ProjectChemDiv2>
      		{locale === "en" && <h5>{ProjectsChem4[0]}</h5>}
			{locale === "fr" && <h5>{ProjectsChem4[1]}</h5>}		
			{locale === "sp" && <h5>{ProjectsChem4[2]}</h5>}	
			{locale === "pt" && <h5>{ProjectsChem4[3]}</h5>}	
			</ProjectChemDiv2>
			<ProjectChemDiv3>
			<A target="_blank" href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=abel+locati&btnG=" ><Icon name="googleScholars" color="blue"/></A>
			</ProjectChemDiv3>

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

