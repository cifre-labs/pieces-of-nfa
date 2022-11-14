import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	h1 {
		font-size: clamp(${theme.fontSizes.mobile.xxl}, ${theme.fontSizes.tablet.xxl}, ${theme.fontSizes.desktop.xxl});
		font-family: ${theme.fontFamily.rubik};
	}

	p, a, span {
		font-size: clamp(${theme.fontSizes.mobile.xs}, ${theme.fontSizes.tablet.xs}, ${theme.fontSizes.desktop.xs});
		font-family: ${theme.fontFamily.rubik};
	}
`;