import React from "react";
import * as S from "./styles";

import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = ({children}) => {
  return (
    <S.Container>
      <MainHeader />
      <Aside />
      <Content >{children}</Content>
    </S.Container>
  );
};
export default Layout;
