import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Link from '../atoms/basicTypography/Link';
import StyledHeader from '../atoms/basicTypography/Header';
import StyledParagraph from '../atoms/basicTypography/Paragraph';
import StyledIcon from '../atoms/FavIcon';

const rotate = keyframes`
  0% {font-size:1.5rem;}
  100% {transform: rotate(-360deg); font-size: 2rem;}
`;
const AnimatedLink = styled(Link)`
  &:hover {
    .fas {
      font-size: 2rem;
      margin-bottom: 0;
      animation: ${rotate} 1s linear;
    }
  }
`;
const Paragraph = styled(StyledParagraph)`
  max-width: 800px;
`;
const Icon = styled(StyledIcon)`
  margin: 0.5rem 0;
`;
const Header = styled(StyledHeader)`
  margin-bottom: 0;
`;

export { AnimatedLink, Paragraph, Icon, Header };
