import React from "react"
import { Tab } from "./Tab"
import { TabContainer, ListTab, LiActive, OlTabs } from "../theme/SmallComp"
import { Container, Relative, Flex  } from "../theme/Containers"
import styled  from "styled-components"
import { css }  from "styled-components"


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
			<OlTabs 				
				
				
				flexDirection={"column"}>

				{children.map((tab) => {
				console.log("props olTabs", this.props.maxWidth)
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
							<h4>{content}</h4>
						)
					}
				})}
			</div>		
			</>
			)
	}
}

//</TabContainer>