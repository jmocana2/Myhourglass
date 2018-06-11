import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function Culture(props){
  return (
    <section>
      <h1>Culture</h1>
      <p>This is the culture section</p>
      <ul>
        <li><Link to="/">go to the init page</Link></li>
        <li><Link to="/spain/">go to the next page</Link></li>
      </ul>
    </section>
  )
}

export default withRouter(Culture) 