import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid, StyledGridItem } from './styles'

function Grid({ gridTemplateArea, typeArea, confGridArea, confGridRowColumns, content }){
  return (
    <StyledGrid typeArea={typeArea} gridTemplateArea={gridTemplateArea}>
      {
        typeArea ?
          confGridArea.map(item => (<StyledGridItem typeArea={typeArea} area={item.area}>{item.content}</StyledGridItem>))
        :
          confGridRowColumns.map(item => (<StyledGridItem typeArea={typeArea} confGridRowColumns={confGridRowColumns}>{item.content}</StyledGridItem>))
      }
    </StyledGrid>
  )
}

Grid.propTypes = {
  typeArea: PropTypes.bool,
  gridTemplateArea: PropTypes.arrayOf(    
    PropTypes.string
  ),  
  confGridRowColumns: PropTypes.arrayOf(    
    PropTypes.shape({
      gridRow: PropTypes.string,
      gridColumn: PropTypes.string,
      content: PropTypes.node
    })   
  ), 
  confGridArea: PropTypes.arrayOf(
    PropTypes.shape({
      gridItem: PropTypes.shape({
        area: PropTypes.string,
        content: PropTypes.node
      })       
    })   
  ),  
};

Grid.defaultProps = {
  confGrid: undefined,
  typeArea: false
};

export default Grid 