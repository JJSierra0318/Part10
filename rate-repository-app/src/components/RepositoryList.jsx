import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  if (result.loading) return <Text>loading...</Text>
  
  const repositoryNodes = result.data
    ? result.data.repositories.edges.map(edge => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => (
        <RepositoryItem data={item} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default RepositoryList;