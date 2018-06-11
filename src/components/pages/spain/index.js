import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function Spain(props){
  return (
    <section>
      <h1>Spain</h1>
      <p>This is the spain section</p>
      <ul>
        <li><Link to="/">go to the init page</Link></li>
        <li><Link to="/politic/">go to the next page</Link></li>
      </ul>
    </section>
  )
}

export default withRouter(Spain) 