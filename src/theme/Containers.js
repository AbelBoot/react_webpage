import styled  from "styled-components"
import { css }  from "styled-components"

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

export const ProjectChemistryContainer = styled.div`
  width: 350px;
  background-color: blue;
  
`


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

