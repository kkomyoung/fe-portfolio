import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Resume from "./pages/ResumePage";
import Main from "./pages/MainPage";
import DailyDevPage from "./pages/DailyDevPage";
import ScrollToTop from "./utils/ScrollToTop";
import LoveDocPage from "./pages/LoveDocPage";
import MobilePage from "./pages/MobilePage";
import { BrowserView, MobileView } from "react-device-detect";

function App() {
  return (
    <main className="App">
      <BrowserView>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ScrollToTop />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/daily-dev" element={<DailyDevPage />} />
              <Route path="/love-document" element={<LoveDocPage />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </BrowserView>
      <MobileView>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<MobilePage />} />
            <Route path="/daily-dev" element={<MobilePage />} />
            <Route path="/love-document" element={<MobilePage />} />
            <Route path="/resume" element={<MobilePage />} />
          </Routes>
        </BrowserRouter>
      </MobileView>
    </main>
  );
}

export default App;
