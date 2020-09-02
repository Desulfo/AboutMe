import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 30px;
  font-weight: bold;
  background-color: #f0f0f0;
  border-radius: 50px;
  border: 1px solid black;
  &:hover {
    background-color: #364f6b;
    cursor: pointer;
  }
`;

export default Button;
