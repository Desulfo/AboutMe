import styled from 'styled-components';
import Link from '../atoms/basicTypography/Link';

const ContactSection = styled.section`
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

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
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem 0;
  max-width: 800px;
  margin: 0 auto;
`;
const Input = styled.input`
  margin: 0.5rem;
  padding: 0.3rem;
  background-color: #f0f0f0;
  border: none;
`;
const TextArea = styled.textarea`
  margin: 0.5rem;
  padding: 0.2rem;
  height: 80px;
  background-color: #f0f0f0;
  border: none;
  @media (min-width: 440px) {
    width: 300px;
  }
`;
const InputContainer = styled.div`
  margin: 0.5rem;
`;
const TextAreaContainer = styled(InputContainer)`
  width: 100%;
`;
const ContactLink = styled(Link)`
  margin: 0.5rem;
`;

export {
  ContactSection,
  Button,
  Form,
  Input,
  TextArea,
  InputContainer,
  TextAreaContainer,
  ContactLink,
};
