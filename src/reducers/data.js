function data(state, action){
  switch (action.type){
    case 'PRESS_BUTTON': {
      return {
        ...state,
        pressButton: action.payload.query  
      };
    }
    default: 
      return state;    
  }
}

export default data;