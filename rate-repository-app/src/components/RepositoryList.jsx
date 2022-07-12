import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { useDebounce } from 'use-debounce'

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import TextInput from './TextInput';



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
    alignContent: 'center',
  }
})

const RepositoryListHeader = ({ sortBy, setSortBy, filterBy, setFilterBy }) => {

  return (
    <View>
      <TextInput
        placeholder='Search'
        value={filterBy}
        onChangeText={(value) => setFilterBy(value)}
      />
      <Picker
        selectedValue={sortBy}
        onValueChange={(itemValue) => setSortBy(itemValue)}
        style={sortStyle.container}
      >
        <Picker.Item label='Latest repositories' value='latest' />
        <Picker.Item label='Highest rated repositories' value='highest' />
        <Picker.Item label='Lowest rated repositories' value='lowest' />
      </Picker>
    </View>
  )
}

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, sortBy, setSortBy, filterBy, setFilterBy, onEndReach }) => {

  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return <FlatList
    data={repositoryNodes}
    ItemSeparatorComponent={ItemSeparator}
    ListHeaderComponent={<RepositoryListHeader sortBy={sortBy} setSortBy={setSortBy} fitlerBy={filterBy} setFilterBy={setFilterBy} />}
    onEndReached={onEndReach}
    onEndReachedThreshold={0.5}
    renderItem={({ item }) => (
      <Pressable onPress={() => navigate(`/repository/${item.id}`, { replace: true })}>
        <RepositoryItem data={item} />
      </Pressable>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
}

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState('latest')
  const [filterBy, setFilterBy] = useState('')
  const [debouncedSearch] = useDebounce(filterBy, 500)
  const { repositories, fetchMore } = useRepositories({ sortBy, filterBy: debouncedSearch, first: 8 })

  const onEndReach = () => {
    fetchMore();
  }

  return <RepositoryListContainer
    repositories={repositories}
    sortBy={sortBy}
    setSortBy={setSortBy}
    filterBy={filterBy}
    setFilterBy={setFilterBy}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;