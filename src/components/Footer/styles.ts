import styled from "styled-components";

export const Container = styled.div`
  grid-area: FT;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

@media(max-width: 600px){
  > div{
    display: none
  }
}
  
`;
