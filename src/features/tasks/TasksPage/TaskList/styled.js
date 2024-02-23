import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};

  ${({hidden}) => hidden && css`
    display: none;
  `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.teal};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  padding: 0px;
  transition: filter 0.3s;

  ${({$toggleDone}) => $toggleDone && css`
    background: ${({ theme }) => theme.color.forestGreen};
  `}

  ${({$remove}) => $remove && css`
    background: crimson;
  `}

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;