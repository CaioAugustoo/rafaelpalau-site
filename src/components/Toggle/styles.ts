import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.success,
    offColor: theme.colors.info,
  })
)<ReactSwitchProps>`
  margin: 0 5px;
`;
