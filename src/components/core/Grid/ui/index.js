import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid, StyledGridItem } from './styles'

function Grid({ typeArea, dataGrid }){
  return (
    <StyledGrid typeArea={typeArea}>
      {
        dataGrid.map(item => (<StyledGridItem typeArea={typeArea}>{item.content}</StyledGridItem>))          
      }
    </StyledGrid>
  )
}

Grid.propTypes = {
  typeArea: PropTypes.bool,
  dataGrid: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node
    })  
  ),  
};

Grid.defaultProps = {
  typeArea: false,
  dataGrid: undefined
};

export default Grid 