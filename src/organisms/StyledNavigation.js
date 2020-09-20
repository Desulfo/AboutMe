import styled from 'styled-components';
import UnorderedList from '../atoms/StyledUnorderedList';

const List = styled(UnorderedList)`
  max-width: 550px;
  @media (min-width: 480px) {
    flex-direction: row;
  }
`;
const ListItem = styled.li`
  margin: 0.7rem;
  display: ${({ open }) => (open ? 'block' : 'none')};
  @media (min-width: 480px) {
    display: block;
  }
`;
const Navigation = styled.nav`
  padding: 1rem;
  text-align: center;
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  @media (min-width: 450px) {
  }
`;

export { List, ListItem, Navigation };
