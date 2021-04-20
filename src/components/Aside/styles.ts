import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.primary};
  padding-left: 20px;
  `;

export const Header = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  
`;

export const MenuItemLink = styled.a`
  color: ${(props) => props.theme.colors.success};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.3s;
  align-items: center;
  >svg{
    margin-right: 3px;
   font-size: 20px;
  }
  display: flex;
 
  &:hover {
    opacity: 0.7;
  }
`;
