import { css } from 'styled-components';

const getButtonContainedColors = (colorType) => {   
  
  let color = '#FFF';
  let bgColor = '#000';
 
  switch(colorType) {
    case 'darkPrimary':
      color = '#FFF';
      bgColor = props => props.theme.darkPrimaryColor;
      break;
    case 'primary':
      color = '#FFF';
      bgColor = props => props.theme.primaryColor;
    break;
    case 'lightPrimary':
      color = '#000';
      bgColor = props => props.theme.lightPrimaryColor;
    break;
    case 'light':
      color = '#000';
      bgColor = props => props.theme.dividerColor;
    break;
    case 'dark':
      color = '#FFF';
      bgColor = props => props.theme.primaryText;
    break;
    case 'accent':
      color = '#FFF';
      bgColor = props => props.theme.accentColor;
    break;        
}
  return(
    css`
    background-color: ${bgColor};
    color: ${color};
  `
  )
}

export {getButtonContainedColors}