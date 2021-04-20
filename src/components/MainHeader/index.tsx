import React from "react";
import * as S from "./styles";
import avatar from "../../assets/avatar.jpg";
import Tag from "../Tags/Tag";
import Toggle from "../Toggle";

const MainHeader: React.FC = () => {
  return (
    <S.Container>
      <S.Profile>
        <S.Divs>
          <Tag>&#60;div&#62;</Tag>
          <Tag>&#60;div/&#62;</Tag>
        </S.Divs>
        <div>
          <Tag>&#60;img/&#62;</Tag>
          <Tag>&#60;h3&#62;</Tag>
          <Tag>&#60;/h3&#62;</Tag>
        </div>
        <S.ImageAndTitle>
          <S.Image src={avatar} />
          <h3>rafael ralau</h3>
        </S.ImageAndTitle>
      </S.Profile>

      <div>
        <Tag>&#60;Toggle /&#62;</Tag>
        <Toggle />
      </div>
    </S.Container>
  );
};
export default MainHeader;
