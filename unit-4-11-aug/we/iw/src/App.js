import React, { useState } from "react";
import "./App.css";
import { Components } from "./Examples/Components";
import { Grids } from "./Examples/Grids";
import { Layout } from "./Examples/Layout";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const theme = createTheme({
	palette: {
		primary: {
			main: red[500],
		},
		secondary: {
			main: green[500],
		},
	},
});
const darkTheme = createTheme({
	palette: {
		primary: {
			main: green[500],
		},
		secondary: {
			main: red[500],
		},
	},
});

function App() {
	const [dark, setDark] = React.useState(false);
	console.log(dark);
	return (
		<ThemeProvider theme={dark ? darkTheme : theme}>
			<div className="App">
				<Box>
					<Button
						variant="outlined"
						color="primary"
						size="large"
						onClick={() => {
							setDark((prev) => !prev);
						}}
					>
						Change Theme
					</Button>
				</Box>
				{/* <Components /> */}
				<Layout>
					<Components />
				</Layout>
				<Grids />
			</div>
		</ThemeProvider>
	);
}

export default App;
