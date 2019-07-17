import React, { useState, useEffect } from 'react';


import {
  Table, Tr, Td, Th,
} from '../../components/Table';

const onMappingData = data => data.map((item) => {
  const date = new Date(item.created_at).toDateString();

  return (
    <Tr key={item.username}>
      <Td>{item.username}</Td>
      <Td>{item.nick_name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.lv}</Td>
      <Td>{item.exp}</Td>
      <Td>{item.coin}</Td>
      <Td>{item.is_active}</Td>
      <Td>{item.is_staff}</Td>
      <Td>{item.is_superuser}</Td>
      <Td>{date}</Td>
    </Tr>
  );
});

const Presenter = (props) => {
  // const { data, next, onLoad } = props;
  // const loadConfig = !!next;


  return (
    <Table id="scrollTable">
      <thead>
        <Tr>
          <Th>Username</Th>
          <Th>Nick Name</Th>
          <Th>E-mail</Th>
          <Th>Level</Th>
          <Th>EXP</Th>
          <Th>Coin</Th>
          <Th>Sign</Th>
          <Th>Staff Authority</Th>
          <Th>Super User Authority</Th>
          <Th>Created Account</Th>
        </Tr>
      {/* </thead>
      <tbody>{onMappingData()}</tbody> */}
    </Table>
  );
};

export default Presenter;
