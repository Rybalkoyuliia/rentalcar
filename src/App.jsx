import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Catalog from "./pages/Catalog/Catalog";
import NotFound from "./pages/NotFoutd/NotFound";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
