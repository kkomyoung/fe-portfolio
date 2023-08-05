import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Main from "./pages/Main";

function App() {
  return (
    <main className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
