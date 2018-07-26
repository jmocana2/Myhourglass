import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledList, StyledItem } from './styles'

const List = ({children, className, vertical}) => {
  return (
    <StyledList className={className} vertical={vertical}>
      {React.Children.map(children, (element, index) => (
        <StyledItem vertical={vertical} key={index}>{element}</StyledItem>
      ))}
    </StyledList>   
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

List.defaultProps = {
  className: undefined,
  vertical: false,
};

export default List;