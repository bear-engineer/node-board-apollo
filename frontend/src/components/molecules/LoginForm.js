import React from 'react';
import PropTypes from 'prop-types';
import { Input, SubmitInput } from '../atoms/Input';
import { CenterCard } from '../atoms/Card';
import './LoginForm.scss';

const LoginForm = (props) => {
  const {
    userNameValue,
    passwordValue,
    onChangeUserName,
    onChangePassword,
    onRequestSubmit,
  } = props;
  return (
    <CenterCard>
      <form onSubmit={onRequestSubmit}>
        <Input
          value={userNameValue}
          name="username"
          placeholder="username"
          onChange={onChangeUserName}
          className="LoginForm-input"
          type="text"
        />
        <Input
          value={passwordValue}
          name="password"
          placeholder="password"
          onChange={onChangePassword}
          className="LoginForm-input"
          type="password"
        />
        <SubmitInput type="submit" value="Login" className="LoginForm-submit" />
      </form>
    </CenterCard>
  );
};

LoginForm.propTypes = {
  userNameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  onChangeUserName: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onRequestSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
