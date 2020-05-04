import React, { useReducer } from "react"

const initialVal = {
		name: "", email: "", message:""
	}
		
function reducer(state, {field, value}){
		console.log("state", state)
		return {
			...state, 
			[field]: value
		}
	}

export function Form(props){
	const [state, dispatch] = useReducer(reducer, initialVal)
	const {name, email, message } = state
	const onChange = (e) => {
		dispatch({field: e.target.name, value: e.target.value})
	}

	return (
		<>
		<form onSubmit={onChange}>
		<label>Name: </label>
		<input 
			name="name"
			value={name}
			placeholder="Votre nom"
			onChange={onChange}
		/>
		<label>Email: </label>
		<input 
			name="email"
			value={email}
			placeholder="Votre mail"
			onChange={onChange}
		/>
		<label>Message: </label>
		<input 
			name="message"
			value={message}
			placeholder="Votre message"
			onChange={onChange}
		/>
		<input type="submit" value="Submit"></input>
		</form>	
		</>
		)
}