import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const ACTIVE_USER = gql`
  {
    activeUser {
      username
      nick_name
      signup_comment
      is_active
      created_at
    }
  }
`;

const AdminUser = props => (
  <Query
    query={ACTIVE_USER}
    onCompleted={(data) => {
      console.log(data);
    }}
    onError={(error) => {
      console.log(error);
    }}
  >
    {({ loading, error, data }) => {
      if (loading) return 'loading...';
      if (error) return `Error! ${error.message}`;
      if (error) {
        console.log(error);
      }
      return (
        <section>
          <table>
            <tbody>
              {data.activeUser.map(user => (
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>{user.nick_name}</td>
                  <td>{user.is_active ? '승인' : '승인 대기'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      );
    }}
  </Query>
);

export default AdminUser;
