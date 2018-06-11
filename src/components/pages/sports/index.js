import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function Sports(props){
  return (
    <section>
      <h1>Sports</h1>
      <p>This is the sports section</p>
      <ul>
        <li><Link to="/">go to the init page</Link></li>
        <li><Link to="/culture/">go to the next page</Link></li>
      </ul>
    </section>
  )
}

export default withRouter(Sports) 