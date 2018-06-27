import { injectGlobal } from 'styled-components';
import normalize from '../../utils/normalize';

injectGlobal`
  ${normalize()}

  background-color: peru;
 `

export const Theme = {
  primaryColor: '#FF5676',
  secondaryColor: '#333333'
}  