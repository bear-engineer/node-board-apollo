import styled from 'styled-components';
import React from 'react';

export const Table = (props) => {
  const { children, onScroll } = props;

  return (
    <TableWrap onScroll={onScroll}>
      <Tb>{children}</Tb>
    </TableWrap>
  );
};

const TableWrap = styled.section`
  width: 100%;
  overflow: auto;
  border-radius: 2px;
  background: #fff;
  box-sizing: border-box;
  padding: 32px;
`;

const Tb = styled.table`
  width: 100%;
  box-siging: border-box;
  background: #fff;
  border-radius: 2px;
`;

export const Th = styled.th`
  box-sizing: border-box;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
`;
export const Tr = styled.tr`
  border-bottom: 1px solid #ebeef5;
`;
export const Td = styled.td`
  box-sizing: border-box;
  padding: 16px;
  font-size: 14px;
`;
