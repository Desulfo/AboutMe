import styled from 'styled-components';
import Link from '../atoms/basicTypography/Link';

const StyledLink = styled(Link)`
  margin-right: 2rem;
`;
const Article = styled.article`
  max-width: 800px;
  margin: 0 auto 4rem;
  display: inline-flex;
  flex-wrap: wrap;
  background: #fff;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.75);
  &:last-child {
    margin: 0 auto 1rem;
  }
  @media (min-width: 760px) {
    flex-wrap: nowrap;
    text-align: left;
  }
`;
const Section = styled.section`
  padding: 1rem;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  margin: 0 auto 1rem;
  @media (min-width: 760px) {
    margin: 0 1rem 0 0;
  }
`;

export { Article, Section, Image, StyledLink };
