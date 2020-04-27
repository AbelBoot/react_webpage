import React from "react"
import { ListTab, LiActive, OlTabs } from "./SmallComp"

export class Tab extends React.Component {
	
	onClick = () => {
		const { onClick, label } = this.props
		onClick(label)
	}

	render(){
		const {label} = this.props
		return (
			<ListTab
				onClick={this.onClick}
				>{label}</ListTab>
			)
	}
}