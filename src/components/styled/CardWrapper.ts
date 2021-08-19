import styled from "styled-components";

const CardWrapper = styled.div`
width: 30%;
height: 200px;
border: 1px solid #ededed;
padding: 15px;
margin-bottom:15px;
display:flex;
flex-direction:column;

&:hover{
    box-shadow: 0px 0px 16px -4px rgba(0,0,0,0.22);
-webkit-box-shadow: 0px 0px 16px -4px rgba(0,0,0,0.22);
-moz-box-shadow: 0px 0px 16px -4px rgba(0,0,0,0.22);
}
`

export default CardWrapper;