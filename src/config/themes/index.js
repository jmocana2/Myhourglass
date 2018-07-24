import { injectGlobal } from 'styled-components';
import normalize from '../../utils/normalize';
import OpenSansLight from '../../../assets/fonts/opensans-light-webfont.woff'; 
import OpenSansRegular from '../../../assets/fonts/opensans-regular-webfont.woff';
import OpenSansSemiBold from '../../../assets/fonts/opensans-semibold-webfont.woff';
import OpenSansBold from '../../../assets/fonts/opensans-bold-webfont.woff';


injectGlobal`
  ${normalize()}

  @font-face {
    font-family: 'Open Sans Light';
    src: url('${OpenSansLight}') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans Regular';
    src: url('${OpenSansRegular}') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans Medium';
    src: url('${OpenSansSemiBold}') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans Bold';
    src: url('${OpenSansBold}') format('woff');
    font-weight: 700;
    font-style: normal;
  }
 `
export const Theme = {
  darkPrimaryColor: '#2f3e9e',
  primaryColor: '#3e50b4',
  lightPrimaryColor: '#c4c9e8',
  accentColor: '#df3ffa',
  primaryText: '#202020',
  secondaryText: '#747474',
  dividerColor: '#bcbcbc'
}  