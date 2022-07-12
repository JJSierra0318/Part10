import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ sortBy, filterBy, first }) => {

  let variables = {
    searchKeyword: filterBy,
    first
  }
  switch (sortBy) {
    case 'latest': {
      variables = {...variables, orderBy: 'CREATED_AT', orderDirection: 'DESC'}
      break;
    }
    case 'highest': {
      variables = {...variables, orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'}
      break;
    }
    case 'lowest': {
      variables = {...variables, orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'}
      break;
    }
  }
  
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables 
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) return

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { repositories: data ? data.repositories : undefined, fetchMore: handleFetchMore, loading, ...result };
};

export default useRepositories;
