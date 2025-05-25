import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFoutd/NotFound";
import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";

const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const CarDetail = lazy(() => import("./pages/CarDetail/CarDetail"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/:id" element={<CarDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
