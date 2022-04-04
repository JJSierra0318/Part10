import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Text from './Text'
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

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
  return <View style={styles.container}>
    <ScrollView horizontal>
      <Pressable style={{padding: 10}}>
        <Link to='/'><Text color='primary'>Repositories</Text></Link>
      </Pressable>
      <Pressable style={{padding: 10}}>
      <Link to='/SignIn'><Text color='primary'>Sign In</Text></Link>
      </Pressable>
    </ScrollView>
  </View>;
};

export default AppBar;