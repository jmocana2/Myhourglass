import React, { Component } from 'react';
import Teacher from './Teacher';

class Teachers extends Component {
  render(){
    return(
      <ul>
        {this.props.data.teachers.map((element) => {
          return <Teacher {...element} />
        })}
        <Teacher />
      </ul>
    )
  }
}

export default Teachers