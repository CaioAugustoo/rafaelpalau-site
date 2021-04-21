import styled from "styled-components";

interface IContainerProps {
  menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.primary};
  padding-left: 20px;
  position: relative;

  @media (max-width: 600px) {
    padding-left: 7px;
    position: fixed;
    z-index: 2;
    height: ${(props) => (props.menuIsOpen ? "100vh" : "70px")};
    overflow: hidden;
  }
`;

export const Header = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

export const MenuContainer = styled.nav`
  margin-top: 0px;
  @media (max-width: 600px) {
    margin-top: 0px;
  }
`;

export const MenuItemLink = styled.a`
  color: ${(props) => props.theme.colors.success};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.3s;
  align-items: center;
  > svg {
    margin-right: 3px;
    font-size: 20px;
  }
  display: flex;
  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.success};
`;

export const ProfileTitle = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerMobile = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const ContainerDesktop = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ToogleMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  font-size: 22px;
  background-color: ${(props) => props.theme.colors.warning};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 600px) {
    margin-bottom: 35px;
  }
`;
export const DivToggle = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
`;
