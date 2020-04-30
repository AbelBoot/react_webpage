import React from "react"
import { ListTab } from "../theme/SmallComp"

export class Tab extends React.Component {
	
	onClick = () => {
		const { onClick, label } = this.props
		onClick(label)
	}

	render(){
		const {label, activeTab} = this.props

		return (
			<ListTab 
				onClick={this.onClick}
				selected={activeTab === label}
			>
				{label}
			</ListTab>
			)
	}
}