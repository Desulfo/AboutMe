import styled from 'styled-components';

const List = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 550px;
  @media (min-width: 450px) {
    flex-direction: row;
  }
`;

export default List;
