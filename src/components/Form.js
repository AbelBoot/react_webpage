import React, { useState } from "react"
import {useValidation} from "./FormValidation"
import validateFunction from "./FormValidation"
import { BigDivForm, DivForm, DivFormMess, InputForm, LabelForm, ButtonForm, PForm } from "../theme/FormStyle"
import { FormContainer } from "../theme/Containers"

const initialVal = {
		name: "", email: "", message:""
	}
		

export function FormComp(props){
	const { values, handleChange, handleSubmit, handleBlur, errors, isSubmitting  } 
		= useValidation(initialVal, validateFunction)
	//const [name, setName] = useState("")
	//const [email, setEmail] = useState("")
	//const [message, setMessage] = useState("")


	return (
		<>
		<BigDivForm>
		<FormContainer onSubmit={handleSubmit}>
		<DivForm>
		<LabelForm>Name: </LabelForm>
		<InputForm 
			name="name"
			value={values.name}
			placeholder="Votre nom"
			onChange={handleChange}
			onBlur={handleBlur}
			className={errors.name && "error-input"}
		/>

		<LabelForm>Email: </LabelForm>
		<InputForm 
			name="email"
			value={values.email}
			placeholder="Votre mail"
			onChange={handleChange}
		/>
		
		{errors.email && <PForm>{errors.email}</PForm>}
		
		<ButtonForm type="submit" value="Submit">Submit</ButtonForm>
		</DivForm>
		<DivFormMess>
		<LabelForm>Message: </LabelForm>
		<InputForm 
			name="message"
			value={values.message}
			placeholder="Votre message"
			onChange={handleChange}
		/>
		</DivFormMess>
		</FormContainer>
		</BigDivForm>	
		</>
		)
}