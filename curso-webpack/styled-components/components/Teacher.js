import React from 'react';
import StyledLi from './styles';

function Teacher({ name, twitter }){
  return (
    <StyledLi name={name}>Nombre: {name}, Twitter: {twitter}</StyledLi>
  )
}

export default Teacher 