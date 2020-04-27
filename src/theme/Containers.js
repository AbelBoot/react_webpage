import React from "react"
import styled  from "styled-components"
import { css }  from "styled-components"

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  
`

export const Relative = styled.div`
  position: relative;
  padding: .5em;

`

export const Flex = styled.div`
  display: flex;
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `}
  ${({column}) => column && css`
    flex-direction: ${column};
  `}
  ${({align}) => align && css`
    align-content: ${align};
  `};

`

// export default Divv = styled.div`
// ${({marginBottom}) => marginBottom && css`
//   margin-bottom: ${marginBottom};
//   `}
// ` and then inherith the others with that
//.styled(Divv)

