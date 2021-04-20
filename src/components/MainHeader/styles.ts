import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background-color: ${(props) => props.theme.colors.primary};
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
 color: ${(props) => props.theme.colors.success};
  h3{
    margin-left: 10px;
  }
`;

export const Divs = styled.div`
height: 60px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export const ImageAndTitle = styled.div`
margin-left: 10px;
display: flex;
align-items: center;
`;
