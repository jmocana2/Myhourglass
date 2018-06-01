import styled, {css} from 'styled-components';

const styledLi = styled.li`
  background-color: ${props => props.name === 'Fredy' ? css`green` : css`brown`};
`

export default styledLi