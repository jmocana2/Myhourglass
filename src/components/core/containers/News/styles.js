import styled, { css } from 'styled-components';

const StyledSection = styled.section`
  display: ${props => props.active ? css`none` : css`block`};
`
export default StyledSection