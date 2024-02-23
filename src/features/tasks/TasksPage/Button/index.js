import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  margin: 0 0 0 20px;
  transition: filter 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled,
  &[hidden] { 
    opacity: 0;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export default StyledButton;


