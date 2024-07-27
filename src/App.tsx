import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: "#542EA6",
    },
    secondary: {
      main: "#F5C064",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
