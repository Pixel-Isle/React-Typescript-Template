import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./components/VisualFeedbacks";
import LandingPage from "./pages/LandingPage";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter basename="/React-OP-Template">
      <Routes>
        <Route path={routes.landing} element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
