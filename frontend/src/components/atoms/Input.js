import styled from 'styled-components';

const Input = styled.input`
  all: unset;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #ddd;
  padding: 4px 8px;
  box-sizing: border-box;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  $:disabled {
    opacity: 0.8;
  }
  $:placeholder {
    opacity: 0.8;
  }
`;

const LeftInput = styled(Input)`
  border-radius: 2px 0 0 2px;
  border-right: none;
`;
const RightInput = styled(Input)`
  border-radius: 0 2px 2px 0;
  border-left: 1px solid #ddd;
`;

const SubmitInput = styled(Input)`
  cursor: pointer;
  margin: 0;
  padding: 5.5px 8px;
  width: auto;
`;

export {
  Input, LeftInput, RightInput, SubmitInput,
};
