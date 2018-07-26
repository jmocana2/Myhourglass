import styled, { css } from 'styled-components';
import { rem } from 'polished';

const horizontalListStyles = css`
  border-left: ${rem('1px')} #747474 solid;
  padding-left: ${rem('20px')};
  margin-left: ${rem('20px')};
  &:first-child{
    border: none;
    padding-left: 0;
    margin-left: 0;
  }
`
const verticalListStyles = css`
  border-bottom: ${rem('1px')} #747474 solid;
  padding-bottom: ${rem('10px')};
  margin-bottom: ${rem('10px')};
  text-align: center;
  &:last-child{
    border: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`
const StyledList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  padding: 0;
  ${props => props.vertical && css`flex-direction: column;`};
`;

const StyledItem = styled.li`    
  font: ${rem('14px')} 'Open Sans SemiBold';
  ${props => props.vertical ? verticalListStyles : horizontalListStyles}
  color: #202020; 
`;

export {StyledList, StyledItem}