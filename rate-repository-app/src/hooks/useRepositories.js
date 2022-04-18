import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('')

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    onError: (err) => {
      setError(err)
    }
  })

  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    setRepositories(data.repositories);
  };

  useEffect(() => {
    fetchRepositories()
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;