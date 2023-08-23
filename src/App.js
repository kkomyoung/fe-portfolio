import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Resume from "./pages/ResumePage";
import Main from "./pages/MainPage";
import DailyDevPage from "./pages/projects/DailyDevPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <main className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/daily-dev" element={<DailyDevPage />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </main>
  );
}

export default App;
