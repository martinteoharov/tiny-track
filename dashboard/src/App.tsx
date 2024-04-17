import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Settings from "./pages/settings";
import { ThemeProvider } from "@/components/theme-provider";
import AuthenticationPage from "./pages/auth";
import Layout from "./components/layout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="/auth" element={<AuthenticationPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
