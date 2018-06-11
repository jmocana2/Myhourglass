import React, {Component} from 'react';
import { connect } from 'react-redux';
import New from '../New';
import StyledSection from './styles';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.active = !this.active;
    this.props.dispatch({
      type: 'PRESS_BUTTON',
      payload: {
        query: this.active
      } 
    }) 
  }

  render(){
    const { active } = this.state;
    const listCategories = this.props.categories;
    return (
      <div>
        {listCategories.map((item) => {
          return (
            <StyledSection key={item.id} active={this.props.pressButon}>
              <h1>{item.name}</h1>
              <ul>
                {
                  item.news.map((item) => {
                  return (
                    <li key={item.id}>
                      <New title={item.title} description={item.description} author={item.author} />
                    </li>  
                  )
                })}
              </ul>
              <button onClick={this.onClick}>No pulsar!!</button>
            </StyledSection>
            
          )
        })}
        {this.props.pressButon && <p>Fuck you!!</p>}  
      </div>
    )
  } 
}

function mapStateToProps(state, props){
  return {
    categories: state.dataNews.categories,
    pressButon: state.pressButton
  }
}

export default connect(mapStateToProps)(News) 