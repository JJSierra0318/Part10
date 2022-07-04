import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Text from './Text'
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client';

import { GET_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 75,
    backgroundColor: '#24292e',
    marginBottom: 10,
    flexDirection: 'row'
  },
  // ...
});

const AppBar = () => {

  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const { data } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  })

  return <View style={styles.container}>
    <ScrollView horizontal>
      <Pressable style={{ padding: 10 }}>
        <Link to='/'><Text color='primary'>Repositories</Text></Link>
      </Pressable>
      {data.me
        ? <Pressable style={{ padding: 10 }} onPress={async () => {
          await authStorage.removeAccessToken()
          apolloClient.resetStore()
        }}>
          <Text color='primary'>Sign Out</Text>
        </Pressable>
        : <Pressable style={{ padding: 10 }}>
          <Link to='/SignIn'><Text color='primary'>Sign In</Text></Link>
        </Pressable>}
    </ScrollView>
  </View>;
};

export default AppBar;