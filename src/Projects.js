import React from "react"
import { LocaleContext } from "./components/LocaleContext"
import styled from "styled-components"
import { ProjectText } from "./components/Text"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import Part1 from "./components/droneProject/Part1"


export default class Projects extends React.Component {
	render(){
		return (
			<>
    		<Header />
			<LocaleContext.Consumer>
			{localeVal => {
					if (localeVal.locale === "en"){
						return <h3>{ProjectText[0]}</h3>
					}
					if (localeVal.locale === "fr"){
						return <h3>{ProjectText[1]}</h3>
					}
					if (localeVal.locale === "sp"){
						return <h3>{ProjectText[2]}</h3>
					}
					if (localeVal.locale === "pt"){
						return <h3>{ProjectText[3]}</h3>
					}
				}
			}
			
			</LocaleContext.Consumer>
			<Tabs>
      			<div label="allig">
      				See you later Alligator
					<Part1 />
      			</div>
      			<div label="croco">After a while crocodile</div>
      			<div label="nothing">There is nothing here</div>
    		</Tabs>
			 </>   
			)
	}
}

