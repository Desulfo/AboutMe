import styled from 'styled-components';

const Navigation = styled.nav`
  padding: 1rem;
  text-align: center;
  @media (min-width: 450px) {
    position: sticky;
    top: 0;
    background-color: white;
    width: 100%;
  }
`;

export default Navigation;
