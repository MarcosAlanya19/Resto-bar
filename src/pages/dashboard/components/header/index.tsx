import React from "react";
import * as s from "./styles";
import { Text } from "../../../../components/atomic/text";

interface IProps {
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Header: React.FC<IProps> = (props) => {
  return (
    <s.Container style={props.style}>
      <div>
        <Text text={props.title} type="title" />
        <Text text={props.subtitle} type="text" />
      </div>
      <div>{props.actions}</div>
    </s.Container>
  );
};
