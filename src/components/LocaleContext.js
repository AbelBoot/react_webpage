import React from "react"
//import ToggleLocale from "./components/ToggleLocale"

export const LocaleContext = React.createContext()
//const LocaleProvider = LocaleContext.Provider
//const LocaleConsumer = LocaleContext.Consumer

export default class LocaleProvider extends React.Component {
	
	updateLocale = (lang) => {
        this.setState({locale: lang})//.currentTarget.dataset.lang})
    }

	state = {
		locale: "fr",
		updateLocale: this.updateLocale
	}

	render(){
		return (
			<LocaleContext.Provider
				value={this.state}
				// value={{
				// 	locale: this.state.locale,
				//onClick={updateLocale: this.updateLocale}
			>

			{this.props.children}
			
			</LocaleContext.Provider>
			)
	}

}