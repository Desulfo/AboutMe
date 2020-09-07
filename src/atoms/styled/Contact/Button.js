import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 30px;
  font-weight: bold;
  border-radius: 50px;
  border: 0 solid black;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    border-radius: 10rem;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #364f6b;
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    &:before {
      width: 100%;
    }
  }
`;

export default Button;
