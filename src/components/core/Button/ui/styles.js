import styled from 'styled-components';
import { rem } from 'polished';
import Button from '../../../ui-kit/Button/ui/';
import {getButtonContainedColors} from '../../../../utils/mixins';

const StyledButton = styled(Button)`
  padding: ${rem('15px')} ${rem('12px')};
  border-radius: ${rem('3px')};
  font: ${rem('14px')} 'Open Sans Bold';
  text-transform: uppercase;
  ${props => getButtonContainedColors(props.color)}
`

export { StyledButton }