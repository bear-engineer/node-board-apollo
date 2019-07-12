import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { checkAdmin, saveToken } from '../../utils/loginModule';

import LoginForm from '../../components/molecules/LoginForm';

const ADMIN_LOGIN = gql`
  mutation AdminLogin($username: String!, $auth_key: String!) {
    login(username: $username, auth_key: $auth_key) {
      token
      user {
        username
        is_staff
      }
    }
  }
`;

const AdminLogin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const onChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Mutation
      mutation={ADMIN_LOGIN}
      variables={{ username: userName, auth_key: password }}
      onCompleted={({ login }) => {
        const { user } = login;
        if (checkAdmin(user)) {
          saveToken(login.token);
          setSuccess(true);
        }
      }}
    >
      {login => (
        <section>
          <LoginForm
            onRequestSubmit={(e) => {
              e.preventDefault();
              login();
              setPassword('');
              setUserName('');
            }}
            onChangePassword={onChangePassword}
            onChangeUserName={onChangeUsername}
            userNameValue={userName}
            passwordValue={password}
          />
          {success ? <Redirect to="/admin/" /> : null}
        </section>
      )}
    </Mutation>
  );
};

export default AdminLogin;
