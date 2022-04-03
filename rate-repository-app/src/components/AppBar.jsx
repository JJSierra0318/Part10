import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 75,
    backgroundColor: '#24292e',
    marginBottom: 10,
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <Text color='primary'>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;