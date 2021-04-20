import React from "react";
import Tag from "../Tags";
import * as S from "./styles";


const Footer: React.FC = () => {
  return (
    <S.Container>
      <Tag mb={'20px'} >&#60;footer&#62;</Tag>
      <Tag mr={'5px'}>&#60;span&#62;</Tag>
    <span>Desenvolvido por Rafael Palau</span>
    <Tag ml={'5px'}>&#60;/span&#62;</Tag>
    <Tag  mb={'20px'}>&#60;/footer&#62;</Tag>
    </S.Container>
  );
};
export default Footer;
