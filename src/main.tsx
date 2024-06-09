import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/global-css/index.ts";
import { RoutesConfig } from "./config/router/index.tsx";
import { UserCartProvider } from "./context/userContext.tsx";

export const theme = {
	primary: "#ECA400",
	secondary: "#F14A41",
	terceary: "#3FB43D",
	white: "#FDFFFC",
	black: "#0e0e0e",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<UserCartProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<BrowserRouter>
					<RoutesConfig />
					<ToastContainer />
				</BrowserRouter>
			</ThemeProvider>
		</UserCartProvider>
	</React.StrictMode>
);
