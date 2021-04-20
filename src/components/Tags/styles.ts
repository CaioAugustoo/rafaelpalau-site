import styled from "styled-components";

interface ITagprops {
  ml?: string;
  mt?: string;
  mb?: string;
  mr?: string;
}

export const Tag = styled.div<ITagprops>`
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray};
  font-size: 11px;
  opacity: 0.8;
  font-family: "Fira Code", monospace;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.4;
  }
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-right: ${(props) => props.mr};
`;
