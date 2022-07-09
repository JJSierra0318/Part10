import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ sortBy }) => {

  let variables
  switch (sortBy) {
    case 'latest': {
      variables = {orderBy: 'CREATED_AT', orderDirection: 'DESC'}
      break;
    }
    case 'highest': {
      variables = {orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'}
      break;
    }
    case 'lowest': {
      variables = {orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'}
      break;
    }
  }
  
  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables 
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;
