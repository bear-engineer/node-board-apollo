import { useQuery as uq } from 'react-apollo-hooks';
import gql from 'graphql-tag';

export default (page) => {
  const { data, loading, error } = uq(GET_ALL_USER_QUERY, {
    variables: { page, limit: 10 },
  });
  return data;
};
const GET_ALL_USER_QUERY = gql`
  query AllUser($limit: Int!, $page: Int!) {
    allUserInfo(limit: $limit, page: $page) {
      totalCount
      next
      users {
        username
        nick_name
        email
        lv
        exp
        coin
        created_at
        is_active
        is_staff
        is_superuser
        created_at
      }
    }
  }
`;
