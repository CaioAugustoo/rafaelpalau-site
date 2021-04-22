import React from "react";
import * as S from "./styles";

export interface IAProps {
  ml?: string;
  mt?: string;
  mr?: string;
  mb?: string;
}

const Tag: React.FC<IAProps> = ({ children, mt, mr, mb, ml }) => {
  return (
    <S.Tag ml={ml} mt={mt} mb={mb} mr={mr}>
      {children}
    </S.Tag>
  );
};
export default Tag;
