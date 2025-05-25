import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Header } from "./Layout.styled";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
