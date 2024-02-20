import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activClassName,
}))`
  &.${activClassName} {
    color: red;
  }
`;
