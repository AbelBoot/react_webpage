import styled  from "styled-components"
import { css }  from "styled-components"
import { violet, pink } from "./variables"

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  
   
`
//display: flex;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  width: 100%;
`

export const ProjectDronesContainer = styled.div`
  
    
`

export const ProjectAuctionContainer = styled.div`
    display: flex;
    flex-direction: column;

`

export const ProjectPortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  

`

export const ProjectChemistryContainer = styled.div`
  width: 350px;
`


export const AboutMeContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  
`

export const FormContainer = styled.form`
  display: flex;
  border: 1px solid ${violet};
  border-radius: 15px;
  padding: 1em;
`

//background-color: blue;

export const Relative = styled.div`
  position: relative;
  padding: .5em;

`

export const Flex = styled.div`
  display: flex;
  width: 100%;
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `};
  ${({column}) => column && css`
    flex-direction: ${column};
  `};
  ${({alignItems}) => alignItems && css`
    align-items: ${alignItems};
  `};

`

// export default Divv = styled.div`
// ${({marginBottom}) => marginBottom && css`
//   margin-bottom: ${marginBottom};
//   `}
// ` and then inherith the others with that
//.styled(Divv)

