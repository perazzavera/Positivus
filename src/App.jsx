import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import PaginaPadrao from "./pages/PaginaPadrao";
import Home from "./pages/Home";
import NaoEncontrada from "./pages/NaoEncontrada";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
