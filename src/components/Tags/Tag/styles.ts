import styled from "styled-components";

export const A = styled.div`
  
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    font-size: 10px;
    opacity: 0.5;
    font-family: 'Fira Code', monospace;
    cursor: pointer;
    display: block;
    &:hover {
      opacity: 0.9;
    }

`;
