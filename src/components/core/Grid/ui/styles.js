import styled, { css } from 'styled-components';

/* Grid template */
const StyledGrid = styled.div`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: [start_column] repeat(12, 70px) [end_column];
    ${props => props.typeArea && css`grid-template-areas: 
      "header header header header header header header header header header header header"
      "highlight highlight highlight highlight highlight highlight highlight highlight highlight highlight highlight highlight"
      "new1 new1 new1 new2 new2 new2 new3 new3 new3 new4 new4 new4"
      "new5 new5 new5 new5 new5 new5 new6 new6 new6 new7 new7 new7"
      "new8 new8 new8 new8 new8 new8 news news news new9 new9 new9"
      "footer footer footer footer footer footer footer footer footer footer footer footer"`};
    grid-column-gap: 20px;  
  }  
  font-size: 20px;
  justify-content: center;
`

/* Grid Item */
const StyledGridItem = styled.div`
  border: 1px solid red;
  background-color: peru;
  /* Header */  
  &:nth-of-type(1){
    ${props => props.typeArea ?
      css`grid-area: header;`
    :
      css`grid-column: start_column / end_column;`
    }
  }
  /* Highlight */  
  &:nth-of-type(2){
    ${props => props.typeArea ?
      css`grid-area: highlight;`
    :
      css`grid-column: start_column / end_column;`
    }
  }
  /* New 3 col */  
  &:nth-of-type(3){
    ${props => props.typeArea ?
      css`grid-area: new1;`
    :
      css`grid-column: 1 / 4;`
    }
  }
  /* New 3 col */  
  &:nth-of-type(4){
    ${props => props.typeArea ?
      css`grid-area: new2;`
    :
      css`grid-column: 4 / 7;`
    }
  }
  /* New 3 col */  
  &:nth-of-type(5){
    ${props => props.typeArea ?
      css`grid-area: new3;`
    :
      css`grid-column: 7 / 10;`
    }
  }
  /* New 3 col */  
  &:nth-of-type(6){
    ${props => props.typeArea ?
      css`grid-area: new4;`
    :
      css`grid-column: 10 / 13;`
    }
  }
  /* New 6 col */  
  &:nth-of-type(7){
    ${props => props.typeArea ?
      css`grid-area: new5;`
    :
      css`grid-column: 1 / 7;
          grid-row: 4 / 5;`
    }
  }
  /* New 3 col */  
  &:nth-of-type(8){
    ${props => props.typeArea ?
      css`grid-area: new6;`
    :
      css`grid-column: 7 / 10;
          grid-row: 4 / 5;`
    }
  }
  /* New 3 col */  
  &:nth-of-type(9){
    ${props => props.typeArea ?
      css`grid-area: new7;`
    :
      css`grid-column: 10 / 13;
          grid-row: 4 / 5;`
    }
  }
  /* New 3 col */  
  &:nth-of-type(10){
    ${props => props.typeArea ?
      css`grid-area: new8;`
    :
      css`grid-column: 1 / 7;`
    }
  }
  /* Agrupa News 3 col */  
  &:nth-of-type(11){
    ${props => props.typeArea ?
      css`grid-area: news;`
    :
      css`grid-column: 7 / 10;`
    }
  }
  /* New 3 col */  
  &:nth-of-type(12){
    ${props => props.typeArea ?
      css`grid-area: new9;`
    :
      css`grid-column: 10 / 13;`
    }
  }
  /* New 3 col */  
  &:nth-of-type(13){
    ${props => props.typeArea ?
      css`grid-area: footer;`
    :
      css`grid-column: 1 / 13;`
    }
  }
`



export { StyledGrid, StyledGridItem }