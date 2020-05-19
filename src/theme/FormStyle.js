import styled  from "styled-components"
import { css }  from "styled-components"
import { pink, grey, violet } from "./variables"

export const BigDivForm = styled.div`
  width: 100%;
  margin 2% auto;
`

export const DivForm = styled.div`
  flex: 1;
  order: 1;
  margin-right: 2em;
  & input {
    width: 100%;
    padding-top: 0.2em;
    padding-left: 0.5em;
    border-radius: 20px;
    padding-bottom: 0.5em;
    margin-bottom: 1em; 
  }
  & label {
    font-weight: bold;
  }

`

  // & InputForm {
  //   padding: 1em;
  //   margin-bottom: 3em;
  //   background-color: red;
  // }
export const DivFormMess = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;
  & input {
    flex: 1;
    
    border-radius: 0.5em;
  }
  & label {
    font-weight: bold;
    
  }
  
`
//min-width: 18em;

export const InputForm = styled.input` 

`

export const LabelForm = styled.label`
margin-bottom: .2em;
  
`

export const ButtonForm = styled.button`
    margin-bottom: 1em;  
    margin-top: 2em;  
    margin-left: 2em;  
    
    font-weight: bold;
    font-size: 1em;
    color: white;
    
    padding: 1em;
    padding-right: 1.5em;
    padding-bottom: 2em;

    width: 50%;
    height: 10%;
    border-radius: 0.5em;
    background-color: ${violet};
`


export const PForm = styled.p`
  color: red
`