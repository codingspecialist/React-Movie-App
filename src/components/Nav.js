import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  border: 1px solid black;
  background-color: lightsalmon;
  text-align: center;
`;

const LiStyle = styled.li`
  list-style-type: none;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 50px;
  font-weight: 800;
`;

const Nav = () => {
  return (
    <NavStyle>
      <LiStyle>
        <LinkStyle to="/">영화목록</LinkStyle>
      </LiStyle>
      <LiStyle>
        <LinkStyle to="/movie">영화등록</LinkStyle>
      </LiStyle>
    </NavStyle>
  );
};

export default Nav;
