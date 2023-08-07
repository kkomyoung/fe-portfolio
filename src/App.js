import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Resume from "./pages/ResumePage";
import Main from "./pages/MainPage";

function App() {
  return (
    <main className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </main>
  );
}

export default App;
