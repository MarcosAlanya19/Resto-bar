import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
  type?: "title" | "text" | "smallText" | "textDefault";
  weight?: "regular" | "medium" | "bold" | "semiBold";
  align?: "left" | "center" | "right";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TextContainer = styled.div<{ size: string; weight: number }>`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;

export const Text: React.FC<IProps> = (props) => {
  const titleSizes: Record<string, string> = {
    title: "20px",
    text: "14px",
    textDefault: "16px",
    smallText: "12px",
  };

  const fontWeight: Record<string, number> = {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  };

  const size = titleSizes[props.type as keyof typeof titleSizes];
  let weight = fontWeight[props.weight || "regular"];

  if (props.type === "title") {
    weight = fontWeight.bold;
  }

  if (props.rightIcon || props.leftIcon) {
    return (
      <TextContainer onClick={props.onClick} weight={weight} style={props.style} size={size}>
        {props.leftIcon}
        {props.text}
        {props.rightIcon}
      </TextContainer>
    );
  }
  return (
    <TextContainer onClick={props.onClick} weight={weight} style={props.style} size={size}>
      {props.text}
    </TextContainer>
  );
};
