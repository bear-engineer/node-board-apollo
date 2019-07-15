import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUsersCog, FaRegEdit, FaShoppingBag } from 'react-icons/fa';
import DashBoard from './pages/DashBoard';
import User from './pages/User';

function App() {
  return (
    <Container>
      <SideBar>
        <Logo>
          <Link to="/">Dashboard</Link>
        </Logo>
        <ListWrap>
          <ListItem>
            <Link to="/user">
              <span>
                <FaUsersCog />
              </span>
              User
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/feeds">
              <span>
                <FaRegEdit />
              </span>
              Feeds
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/store">
              <span>
                <FaShoppingBag />
              </span>
              Store
            </Link>
          </ListItem>
        </ListWrap>
      </SideBar>
      <Main>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path="/user" component={User} />
        </Switch>
      </Main>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  height: 100%;
`;

const SideBar = styled.aside`
  flex: 2;
  background: #ffffff;
  height: 100%;
  flex-wrap: wrap;
  overflow: auto;
  padding: 16px;
  box-sizing: border-box;
`;

const Main = styled.main`
  box-sizing: border-box;
  flex: 8;
  background: #f3f2f4;
  height: 100%;
  overflow-y: auto;
  padding: 16px;
`;

const ListWrap = styled.ul`
  width: 100%;
  box-sizing: border-box;
  padding: 32px 0;
`;
const ListItem = styled.li`
  padding: 8px;
  box-sizing: border-box;
  border-radius: 2px;

  a {
    display: block;
    span {
      box-sizing: border-box;
      padding-top: 4px;
      padding-right: 16px;
    }
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #f3f2f4;
  }
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  a {
    display: block;
  }
`;

export default App;
