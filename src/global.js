import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: block;
    margin: 0;
    min-width: 320px;
    font-family: "Google Sans Regular", BlinkMacSystemFont, -apple-system, 'Segoe UI', sans-serif;
  }`;
