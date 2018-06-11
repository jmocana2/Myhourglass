import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function Politic(props){
  return (
    <section>
      <h1>Politic</h1>
      <p>This is the politic section</p>
      <ul>
        <li><Link to="/">go to the init page</Link></li>
        <li><Link to="/sports/">go to the next page</Link></li>
      </ul>
    </section>
  )
}

export default withRouter(Politic) 