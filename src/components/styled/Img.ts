
import styled from 'styled-components'

const Img = styled("img") <{ imageWidth: number, imageHeight: number }>`
height: 30px;
align-self: center;
width: ${props => props.imageWidth ? `${props.imageWidth}px` : '70px'};
height: ${props => props.imageHeight ? `${props.imageHeight}px` : '70px'};
`;

export default Img;