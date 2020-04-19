import React from "react"

export  class Tab extends React.Component {
	
	onClick = () => {

	}

	render(){
		return (
			<li
				onClick={this.onClick}>{label}</li>
			)
	}
}