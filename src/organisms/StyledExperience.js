import styled from 'styled-components';
import UnorderedList from '../atoms/StyledUnorderedList';
import StyledParagraph from '../atoms/basicTypography/Paragraph';

const List = styled(UnorderedList)`
  list-style: disc;
  padding: 0 2rem;
  max-width: 850px;
`;
const ListItem = styled.li`
  padding-left: 1rem;
  text-align: left;
`;
const Paragraph = styled(StyledParagraph)`
  max-width: 800px;
`;

export { List, ListItem, Paragraph };
