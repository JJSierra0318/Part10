import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 75,
    marginTop: 25,
    backgroundColor: '#24292e'
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <Text>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;