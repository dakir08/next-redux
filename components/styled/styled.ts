import styled, { CreateStyled } from "@emotion/styled";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
    darkSecondary: string;
    border: string;
    font: string;
  };
};

export const theme: Theme = {
  colors: {
    primary: "#98C6FA",
    secondary: "#d7e5f5",
    darkSecondary: "#c3d8f0",
    border: "#3a7fce",
    font: "#111111",
  },
};

export default styled as CreateStyled<Theme>;
