import styled from "styled-components";

const CardsContainer = styled(`div`) <{ dir?: 'column' | 'row'; }>`
display:flex;
flex-direction: ${props => props.dir || 'row'};
justify-content: space-between;
flex-wrap: wrap;
margin:5%
`

export default CardsContainer;