import styled from 'styled-components';

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  display: inline-flex;
  flex-wrap: wrap;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.75);
  @media (min-width: 760px) {
    flex-wrap: nowrap;
    text-align: left;
  }
`;

export default Article;
