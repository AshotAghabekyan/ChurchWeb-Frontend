import { Outlet, useLocation } from "react-router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { ErrorBoundary } from "./ErrorBoundary";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
