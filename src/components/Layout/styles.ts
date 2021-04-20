import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "AS MH"
    "AS CT";
  height: 100vh;

  height: 100vh ;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 10px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track{
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
  }
`;
