import React from "react";
import logo from "../../assets/RentalCar.svg";
import { Link, NavLink } from "react-router-dom";
import { NavList, StyledNavigation } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="/">
        <img src={logo} alt="Rental Car Logo" width={120} />
      </Link>
      <NavList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="catalog" end>
            Catalog
          </NavLink>
        </li>
      </NavList>
    </StyledNavigation>
  );
};

export default Navigation;
