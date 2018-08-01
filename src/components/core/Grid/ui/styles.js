import styled, { css } from 'styled-components';

/* Grid template */
const StyledGrid = styled.div`
  @supports (display: grid) {
    display: grid;
    grid-template: [start_header] 150px [start_highlight] 400px [start_rows] repeat(3, minmax(100px, auto)) [start_footer] 200px [end_footer] / [start_column] repeat(4, 285px) [end_column];
    ${props => props.typeArea && css`grid-template-areas: ${props.gridTemplateArea.map((element) => css`${element}`)}`};
    grid-column-gap: 20px;  
  }  
  font-size: 20px;
  justify-content: center;
`
/* Grid Item */
const StyledGridItem = styled.div`
  @supports (display: grid) {
    ${props => props.typeArea ?
      /* Grid Area */
      props.area && css`grid-area: ${props.area};`
    :
      /* Grid Rows & Columns */
      props.confGridRowColumns.map((element, index) => css`
      &:nth-of-type(${index + 1})
        {
          grid-column: ${element.gridColumn};
          grid-row: ${element.gridRow};
        } 
      `)}    
      }  
    }
    border: 1px solid red;
    background-color: peru;
  }  
`

export { StyledGrid, StyledGridItem }