import styled from "styled-components";

const HorizontalFlexContainer = styled(`div`) <{ margin?: string }>`
display:flex;
margin-right: ${props => props.margin || '0'};
margin-left: ${props => props.margin || '0'};
flex-wrap: wrap;
`

export default HorizontalFlexContainer;