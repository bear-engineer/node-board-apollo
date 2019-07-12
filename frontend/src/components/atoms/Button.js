import styled from 'styled-components';

export default styled.button`
  all: unset;
  border-radius: 2px;
  border: 1px solid #ddd;
  padding: 4px 8px;
  box-sizing: border-box;
  font-size: 12px;
  $:disabled {
    opacity: 0.8;
  }
`;
