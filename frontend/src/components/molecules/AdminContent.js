import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../atoms/Container';

const MainWrap = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SideBar = styled.aside`
  height: 100%;
  background: #f8f9fa;
  flex: 2;
  overflow: auto;
`;

const Content = styled.section`
  height: 100%;
  background: #fff;
  flex: 8;
  overflow: auto;
`;

const PageTitle = styled.h1`
  flex: 1;
  font-size: 26px;
  font-weight: 700;
  box-sizing: border-box;
  padding: 16px;
  background: #fff;
`;
const ListWrap = styled.ul`
  flex: 1;
  box-sizing: border-box;
  padding-top: 26px;
`;
const List = styled.li`
  box-sizing: border-box;
  flex: 1;
  padding: 8px 16px;
  a {
    display: block;
  }
`;

const AdminContent = (props) => {
  const { children, match } = props;
  return (
    <MainWrap>
      <SideBar>
        <PageTitle>
          <Link to={`${match.url}`}>Dashboard</Link>
        </PageTitle>
        <ListWrap>
          <List>
            <Link to={`${match.url}/user`}>User</Link>
          </List>
        </ListWrap>
      </SideBar>
      <Content>
        <Container>{children}</Container>
      </Content>
    </MainWrap>
  );
};

AdminContent.propTypes = {};

export default AdminContent;
