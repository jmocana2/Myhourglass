import React from 'react';
import StyledNew from './styles'

function New(props){
  return (
    <StyledNew>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <span>{props.author}</span>
    </StyledNew>
  )
}

export default New 