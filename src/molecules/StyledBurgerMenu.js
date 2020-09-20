import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fade = keyframes`
from{opacity:1}
to{opacity:.5}
`;

export const StyledBurger = styled.button`
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:hover {
    opacity: 0.5;
    animation: ${fade} 0.5s linear;
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 480px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
