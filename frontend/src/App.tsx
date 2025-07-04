import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Shop } from "./pages/Shop";

export function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Shop />} />
      </Routes>

      <Footer />
    </>
  );
}
