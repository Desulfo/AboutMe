import styled from 'styled-components';
import UnorderedList from '../atoms/StyledUnorderedList';

const List = styled(UnorderedList)`
  align-items: center;
  max-width: 850px;
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const ListItem = styled.li`
  width: 80%;
  margin: 1.2rem auto;
  text-align: left;
  @media (min-width: 600px) {
    width: 40%;
    margin-right: 0.5rem;
  }
  @media (min-width: 1000px) {
    width: 30%;
  }
`;

export { List, ListItem };
