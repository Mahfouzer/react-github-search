import styled from 'styled-components'
import Icon from '../../assets/images/search-icon.svg'

const SearchIcon = styled.button`
height: 30px;
align-self: center;
width: 20px;
height: 20px;
position:absolute;
z-index: 2;
top: 7px;
left: 7px;
    background-color:transparent;
    border:none;
    background-image: url(${Icon});
    cursor:pointer
`;

export default SearchIcon;