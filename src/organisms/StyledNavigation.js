import styled from 'styled-components';
import UnorderedList from '../atoms/StyledUnorderedList';

const List = styled(UnorderedList)`
  max-width: 550px;
  @media (min-width: 450px) {
    flex-direction: row;
  }
`;
const ListItem = styled.li`
  margin: 0.7rem;
`;
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

export { List, ListItem, Navigation };
