import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  margin: 0 auto;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  max-width: 850px;
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default List;
