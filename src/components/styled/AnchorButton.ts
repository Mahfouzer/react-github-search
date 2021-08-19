import styled from "styled-components";

const AnchorButton = styled('a') <{ margin?: string }>`
color: black; font-weight: bold; align-self: center; margin: ${({ margin }) => margin || `0;`}
`

export default AnchorButton;