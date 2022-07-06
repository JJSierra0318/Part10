import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = ({ id }) => {

  const variables = { id }

  const { data, ...result } = useQuery(GET_REPOSITORY, {
    variables,
    fetchPolicy: 'cache-and-network'
  })

  return { repository: data ? data.repository : undefined, ...result }
}

export default useRepository