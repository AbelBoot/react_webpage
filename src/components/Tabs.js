import React from "react"
import { Tab } from "./Tab"
import { ListTab, LiActive, OlTabs } from "./SmallComp"

export default class Tabs extends React.Component {
	
	state = {
		activeTab: this.props.children[0].props.label
	}

	clickingTab = (tab) => {
		this.setState({activeTab: tab})
	}

	render(){
		const {children} = this.props
		const {activeTab} = this.state

		return (
			<>
			<OlTabs>
				{children.map((tab) => {
					return (
						<Tab
							key={tab.props.label}
							label={tab.props.label}
							activeTab={activeTab}
							onClick={this.clickingTab}//.bind(tab)}
						></Tab>
						)
				})}
			</OlTabs>
			<div>
				{children.map((content) => {
					if (content.props.label === activeTab){
						return (
							<h3>{content}</h3>
						)
					}
				})}
			</div>
			</>
			)
	}
}