import styled from 'styled-components';

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

export default TextArea;
