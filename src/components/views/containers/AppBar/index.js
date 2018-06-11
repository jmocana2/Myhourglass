import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Politic from '../../../pages/Politic';
import Sports from '../../../pages/Sports';
import Culture from '../../../pages/Culture';
import Spain from '../../../pages/Spain';

class AppBar extends Component {

  render(){

    return (
      <main>
        <Router>
          <div>
            <ul>
              <li><Link to="/politic/">Politic</Link></li>
              <li><Link to="/sports/">Sports</Link></li>
              <li><Link to="/culture/">Culture</Link></li>
              <li><Link to="/spain/">Spain</Link></li>    
            </ul>            
            <Route path="/politic/" component={Politic} />
            <Route path="/sports/" component={Sports} />
            <Route path="/culture/" component={Culture} />
            <Route path="/spain/" component={Spain} />
          </div>
        </Router> 
        
      </main>   
    )
  } 
}

export default AppBar; 