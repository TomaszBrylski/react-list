import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
const activClassName = "active";
 
export const StyledLink = styled(NavLink).attrs(()=> ({
    activClassName,
}))`
    &.${activClassName} {
        color: teal;
    }
`;