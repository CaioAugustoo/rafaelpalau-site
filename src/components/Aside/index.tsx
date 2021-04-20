import React, { useState } from "react";
import * as S from "./styles";
import avatar from "../../assets/avatar.jpg";
import Tag from "../Tags";
import { MdHome, MdClose, MdMenu } from "react-icons/md";
import { SiAboutDotMe, SiBloglovin } from "react-icons/si";
import { GoProject } from "react-icons/go";
import { useTheme } from "../../hooks/theme";
import Toggle from "../Toggle";

const Aside: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [toggleMenuIsOpended, setToggleMenuIsOpended] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  // Trocar tema
  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  const handleTogglemenu = () => {
    setToggleMenuIsOpended(!toggleMenuIsOpended);
  };

  return (
    <S.Container menuIsOpen={toggleMenuIsOpended}>
      <S.ContainerDesktop>
        <S.Header>
          <Tag ml={"20px"}>
            &#60;img src=" &nbsp; <S.Image src={avatar} /> &nbsp; /"&#62;
          </Tag>
          <S.ProfileTitle>
            <Tag>&#60;h3&#62;</Tag>
            <S.Title>Rafael Palau</S.Title>
            <Tag>&#60;/h3&#62;</Tag>
          </S.ProfileTitle>
        </S.Header>
      </S.ContainerDesktop>

      <S.ContainerMobile>
        <S.Header>
          <S.ToogleMenu onClick={handleTogglemenu}>
            {toggleMenuIsOpended ? <MdClose /> : <MdMenu />}
          </S.ToogleMenu>
          <Tag ml={"50px"} mb={"30px"}>
            &#60;img src=" &nbsp; <S.Image src={avatar} /> &nbsp; /"&#62;
          </Tag>
        </S.Header>
      </S.ContainerMobile>

      <S.MenuContainer>
        <Tag ml={"0px"} mt={"2px"}>
          &#60;nav&#62;
        </Tag>
        <Tag ml={"10px"} mt={"2px"}>
          &#60;ul&#62;
        </Tag>
        <Tag ml={"20px"} mt={"2px"}>
          &#60;li&#62;
        </Tag>

        <Tag ml={"30px"} mt={"2px"}>
          &#60;a href="/"&#62;
        </Tag>
        <S.MenuItemLink href='/'>
          {" "}
          <MdHome />
          Home
        </S.MenuItemLink>
        <Tag ml={"30px"} mt={"2px"}>
          &#60;/a&#62;
        </Tag>
        <Tag ml={"20px"} mt={"2px"}>
          &#60;/li&#62;
        </Tag>
        <Tag ml={"20px"} mt={"2px"}>
          &#60;li&#62;
        </Tag>
        <Tag ml={"30px"} mt={"2px"}>
          &#60;a href="/about"&#62;
        </Tag>
        <S.MenuItemLink href='/about'>
          About
          <SiAboutDotMe />
        </S.MenuItemLink>
        <Tag ml={"30px"} mt={"2px"}>
          &#60;/a&#62;
        </Tag>
        <Tag ml={"20px"} mt={"2px"}>
          &#60;/li&#62;
        </Tag>
        <Tag ml={"20px"} mt={"2px"}>
          &#60;li&#62;
        </Tag>
        <Tag ml={"30px"} mt={"2px"}>
          &#60;a href="/projects"&#62;
        </Tag>
        <S.MenuItemLink href='/projects'>
          <GoProject />
          Projects
        </S.MenuItemLink>
        <Tag ml={"30px"} mt={"2px"}>
          &#60;/a&#62;
        </Tag>
        <Tag ml={"20px"} mt={"2px"}>
          &#60;/li&#62;
        </Tag>
        <Tag ml={"20px"} mt={"2px"}>
          &#60;li&#62;
        </Tag>
        <Tag ml={"30px"} mt={"2px"}>
          &#60;a href="/blog"&#62;
        </Tag>
        <S.MenuItemLink href='/blog'>
          <SiBloglovin />
          log
        </S.MenuItemLink>
        <Tag ml={"30px"} mt={"2px"}>
          &#60;/a&#62;
        </Tag>
        <Tag ml={"20px"} mt={"2px"}>
          &#60;/li&#62;
        </Tag>
        <Tag ml={"10px"} mt={"2px"}>
          &#60;/ul&#62;
        </Tag>
        <Tag ml={"0px"} mt={"2px"}>
          &#60;/nav&#62;
        </Tag>
      </S.MenuContainer>

      <S.DivToggle>
      <Tag>'react-switch'</Tag>
      <Tag>&#60;Toggle /&#62;</Tag>
      <Toggle
        checked={darkTheme}
        labelLeft='Light'
        labelRight='Dark'
        onChange={handleChangeTheme}
      />
       </S.DivToggle>
    </S.Container>
  );
};
export default Aside;
