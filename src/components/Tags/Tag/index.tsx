import React from "react";
import * as S from "./styles";

interface IAProps{
  title?: string | undefined;
}

const Tag: React.FC<IAProps> = ({children}) => {
  return (
   
      <S.A >{children}</S.A>
    
  );
};
export default Tag;
