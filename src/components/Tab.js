import React from "react"

export class Tab extends React.Component {
	
	onClick = () => {
		const { onClick, label } = this.props
		onClick(label)
	}

	render(){
		const {label} = this.props
		return (
			<li
				onClick={this.onClick}
				>{label}</li>
			)
	}
}