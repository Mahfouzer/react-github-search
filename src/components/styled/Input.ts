
import styled from 'styled-components'

const Input = styled('input') <{ hasLeftIcon: boolean }>`
height: 30px;
align-self: center;
width:300px;
position:relative;
padding-left:${props => props.hasLeftIcon ? '30px' : '0px'}
`;

export default Input;