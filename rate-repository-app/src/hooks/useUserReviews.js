import { useQuery } from "@apollo/client"
import { GET_USER } from "../graphql/queries"

const useUserReviews = () => {

  const variables = {
    includeReviews: true,
  };

  const { data, loading, fetchMore, ...result } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {

    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) return

    fetchMore({
      variables: {
        after: data?.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { me: data?.me, fetchMore: handleFetchMore, loading, ...result  }

};

export default useUserReviews;