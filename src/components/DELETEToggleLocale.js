import React from "react"
import { LocaleContext } from "./LocaleContext"

export default class ToggleLocale extends React.Component {
	
// <button onClick={this.updateLocale.bind("french")}>french</button>
// 			<button onClick={this.updateLocale.bind("english")}>english</button>


	render(){
		return (
			<LocaleContext.Consumer>
			{localeVal => (
        	<button onClick={localeVal.updateLocale}>Change language</button>	
      		)}			
			</LocaleContext.Consumer>
			)
	}
} 

