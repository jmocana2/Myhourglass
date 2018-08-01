import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid, StyledGridItem } from './styles'

function Grid({ gridTemplateArea, confGrid }){
  return (
    <StyledGrid gridTemplateArea={gridTemplateArea}>
      {
        confGrid.map(item => (<StyledGridItem area={item.area}>{item.area}</StyledGridItem>))
      }
    </StyledGrid>
  )
}

Grid.propTypes = {
  gridTemplateArea: PropTypes.arrayOf(    
    PropTypes.string
  ),   
  confGrid: PropTypes.arrayOf(
    PropTypes.shape({
      gridItem: PropTypes.shape({
        area: PropTypes.string     
      })       
    })   
  )
};

Grid.defaultProps = {
  confGrid: undefined
};

export default Grid 