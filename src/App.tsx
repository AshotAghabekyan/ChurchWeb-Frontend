import { Outlet } from "react-router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
