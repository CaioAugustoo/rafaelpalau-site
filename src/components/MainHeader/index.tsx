import React, {useState} from "react";
import * as S from "./styles";
import Tag from "../Tags";
import Toggle from "../Toggle";
import { useTheme } from "../../hooks/theme";

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  // Trocar tema
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  // Trocar tema
  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  return (
    <S.Container>
      <S.Profile>
        <div>
          <Tag mb={"20px"}>&#60;header&#62;</Tag>
          <Tag>&#60;/header&#62;</Tag>
        </div>

        <div>
          <Tag mb={"10px"} ml={"5px"}>
            &#60;h3&#62;
          </Tag>
          <Tag ml={"5px"} mr={"10px"}>
            &#60;/h3&#62;
          </Tag>
        </div>

        <h3>Rafael Palau</h3>
      </S.Profile>

      <S.DivToggle>
        <Tag>'react-switch'</Tag>
        <Tag>&#60;Toggle /&#62;</Tag>
        <Toggle
        checked={darkTheme}
        labelLeft="Light"
        labelRight="Dark"
        onChange={handleChangeTheme}
      />
           </S.DivToggle>

    </S.Container>
  );
};
export default MainHeader;
