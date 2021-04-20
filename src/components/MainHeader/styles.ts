import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background-color: ${(props) => props.theme.colors.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.colors.success};
`;


export const ImageAndTitle = styled.div`
  display: flex;
  align-items: center;
`;
