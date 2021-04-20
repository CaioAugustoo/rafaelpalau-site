import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto 50px;

  grid-template-areas:
    "AS MH"
    "AS CT"
    "FT FT";

  @media (max-width: 600px) {
    grid-template-columns: 170px auto;
    grid-template-rows: 70px auto 50px;
    grid-template-areas:
      "MH MH"
      "CT CT"
      "FT FT";
  }
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
    border-radius: 10px;
  }
`;
