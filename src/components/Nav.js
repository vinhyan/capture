import React from "react";
import { Link } from "react-router-dom";
//Styled
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link to="https://vinhyan.github.io/capture/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/" style={pathname === "https://vinhyan.github.io/capture/" ? { color: "#23d997" } : {}}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            style={pathname === "https://vinhyan.github.io/capture/work" ? { color: "#23d997" } : {}}
          >
            Our Work
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={pathname === "https://vinhyan.github.io/capture/contact" ? { color: "#23d997" } : {}}
          >
            Contact
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  z-index: 5;

  #logo {
    font-size: 1.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: lighter;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }

  @media (max-width: 767px) {
    padding: 1rem 3rem;
    flex-wrap: wrap;
    justify-content: center;
    #logo {
      display: inline-block;
      padding: 1rem 0;
    }
    ul {
      width: 100%;
      justify-content: space-evenly;
      padding: 1rem 0;
    }
    li {
      padding: 0 1rem;
    }
  }
`;
export default Nav;
