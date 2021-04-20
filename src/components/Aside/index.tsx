import React from "react";
import * as S from "./styles";
import avatar from "../../assets/avatar.jpg";
import Tag from "../Tags/Tag";
import { MdHome } from "react-icons/md";
import { SiAboutDotMe, SiBloglovin } from "react-icons/si";
import { GoProject } from "react-icons/go";

const Aside: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <Tag>&#60;header&#62;</Tag>
        <Tag ml={"20px"}>
          &#60;img src=" &nbsp; <S.Image src={avatar} /> &nbsp; /"&#62;
        </Tag>
        <Tag>&#60;/header&#62;</Tag>
      </S.Header>

      <S.MenuContainer>
        <Tag ml={"0px"} mt={"5px"}>
          &#60;nav&#62;
        </Tag>
        <Tag ml={"10px"} mt={"5px"}>
          &#60;ul&#62;
        </Tag>
        <Tag ml={"20px"} mt={"5px"}>
          &#60;li&#62;
        </Tag>

        <Tag ml={"30px"} mt={"5px"}>
          &#60;a href="/"&#62;
        </Tag>
        <S.MenuItemLink href='/'>
          {" "}
          <MdHome />
          Home
        </S.MenuItemLink>
        <Tag ml={"30px"} mt={"5px"}>
          &#60;/a&#62;
        </Tag>
        <Tag ml={"20px"} mt={"5px"}>
          &#60;/li&#62;
        </Tag>
        <Tag ml={"20px"} mt={"5px"}>
          &#60;li&#62;
        </Tag>
        <Tag ml={"30px"} mt={"5px"}>
          &#60;a href="/about"&#62;
        </Tag>
        <S.MenuItemLink href='/'>
          About
          <SiAboutDotMe />
        </S.MenuItemLink>
        <Tag ml={"30px"} mt={"5px"}>
          &#60;/a&#62;
        </Tag>
        <Tag ml={"20px"} mt={"5px"}>
          &#60;/li&#62;
        </Tag>
        <Tag ml={"20px"} mt={"5px"}>
          &#60;li&#62;
        </Tag>
        <Tag ml={"30px"} mt={"5px"}>
          &#60;a href="/projects"&#62;
        </Tag>
        <S.MenuItemLink href='/'>
          <GoProject />
          Projects
        </S.MenuItemLink>
        <Tag ml={"30px"} mt={"5px"}>
          &#60;/a&#62;
        </Tag>
        <Tag ml={"20px"} mt={"5px"}>
          &#60;/li&#62;
        </Tag>
        <Tag ml={"20px"} mt={"5px"}>
          &#60;li&#62;
        </Tag>
        <Tag ml={"30px"} mt={"5px"}>
          &#60;a href="/blog"&#62;
        </Tag>
        <S.MenuItemLink href='/'>
          <SiBloglovin />
          log
        </S.MenuItemLink>
        <Tag ml={"30px"} mt={"5px"}>
          &#60;/a&#62;
        </Tag>
        <Tag ml={"20px"} mt={"5px"}>
          &#60;/li&#62;
        </Tag>
        <Tag ml={"10px"} mt={"5px"}>
          &#60;/ul&#62;
        </Tag>
        <Tag ml={"0px"} mt={"5px"}>
          &#60;/nav&#62;
        </Tag>
      </S.MenuContainer>
    </S.Container>
  );
};
export default Aside;
