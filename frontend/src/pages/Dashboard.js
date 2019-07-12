// import React from 'react';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
// import { Redirect, Switch, Route } from 'react-router-dom';

// import PropTypes from 'prop-types';
// import Login from '../components/admin/Login';

// const CHECK_ADMIN = gql`
//   query {
//     checkAdmin
//   }
// `;

// const Dashboard = props => (
//   <Query
//     query={CHECK_ADMIN}
//     onError={({ graphQLErrors }) => {
//       console.log(graphQLErrors);
//     }}
//   >
//     {({ error }) => {
//       const { match } = props;
//       return (
//         <section>
//           {!localStorage.getItem('api_token') && (
//             <Redirect to={`${match.url}/admin-login`} />
//           )}
//           {error && <Redirect to={`${match.url}/admin-login`} />}
//           <Switch>
//             <Route path="/dashboard/admin-login" component={Login} />
//           </Switch>
//         </section>
//       );
//     }}
//   </Query>
// );

// Dashboard.propTypes = {
//   match: PropTypes.object,
// };

// export default Dashboard;
