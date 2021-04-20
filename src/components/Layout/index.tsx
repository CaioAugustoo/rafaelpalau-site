import React from "react";
import * as S from "./styles";

import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";
import Footer from "../Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
      <Footer />
    </S.Container>
  );
};
export default Layout;
