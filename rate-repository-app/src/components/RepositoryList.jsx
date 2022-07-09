import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker'

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const sortStyle = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'stretch',
    width: 350,
    marginTop: 15,
    marginBottom: 15,
    alignContent: 'center',
    backgroundColor: 'white'
  }
})

const SelectOrder = ({ sortBy, setSortBy }) => {
  return (
    <Picker
      selectedValue={sortBy}
      onValueChange={(itemValue) => setSortBy(itemValue)}
      style={sortStyle.container}
    >
      <Picker.Item label='Latest repositories' value='latest'/>
      <Picker.Item label='Highest rated repositories' value='highest'/>
      <Picker.Item label='Lowest rated repositories' value='lowest'/>
    </Picker>
  )
}

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, sortBy, setSortBy }) => {

  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return <FlatList
    data={repositoryNodes}
    ItemSeparatorComponent={ItemSeparator}
    ListHeaderComponent={<SelectOrder sortBy={sortBy} setSortBy={setSortBy} />}
    renderItem={({ item }) => (
      <Pressable onPress={() => navigate(`/repository/${item.id}`, {replace: true})}>
        <RepositoryItem data={item} />
      </Pressable>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
}

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState('latest')

  const { repositories } = useRepositories({ sortBy })

  return <RepositoryListContainer repositories={repositories} sortBy={sortBy} setSortBy={setSortBy}/>;
};

export default RepositoryList;