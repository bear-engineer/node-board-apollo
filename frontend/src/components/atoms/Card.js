import styled from 'styled-components';

const Card = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  padding: 8px;
  background: #fff;
  border: 1px solid #dee2e6;
`;

const CenterCard = styled(Card)`
  max-width: 480px;
  margin: 0 auto;
  padding: 16px;
`;

export { Card, CenterCard };
