import React from 'react';
import StyledTeacher from './styles'

function Teacher(props){
  return (
    <StyledTeacher>Nombre: {props.name}, Twitter: {props.twitter} - {props.children}</StyledTeacher>
  )
}

export default Teacher 