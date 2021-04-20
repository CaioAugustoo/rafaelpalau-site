import React from "react";
import * as S from "./styles";
import Tag from "../Tags";
import Toggle from "../Toggle";
import { DivsTwo } from "../DivTwo/styles";
import DivThere from "../DivThree";

const MainHeader: React.FC = () => {
  return (
    <S.Container>
      <S.Profile>
        <DivThere>
          <Tag >&#60;header&#62;</Tag>
          <Tag >&#60;/header&#62;</Tag>
        </DivThere>

        <DivsTwo>
          <Tag >&#60;h3&#62;</Tag>

          <Tag >&#60;/h3&#62;</Tag>
        </DivsTwo>

        <h3>Rafael Palau</h3>
      </S.Profile>

      <div>
        <Tag >'react-switch'</Tag>
        <Tag >&#60;Toggle /&#62;</Tag>
        <Toggle />
      </div>
    </S.Container>
  );
};
export default MainHeader;
