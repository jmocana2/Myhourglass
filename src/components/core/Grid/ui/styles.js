import styled, { css } from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template: 150px 400px repeat(3, minmax(100px, auto)) 200px / repeat(4, 285px);
  grid-template-areas: ${props => props.gridTemplateArea.map((element) => css`${element}`)};
  grid-column-gap: 20px;  
  font-size: 20px;
  justify-content: center;
`

const StyledGridItem = styled.div`
  border: 1px solid red;
  background-color: peru;
  ${props => props.area && css`grid-area: ${props.area};`}
`

export { StyledGrid, StyledGridItem }