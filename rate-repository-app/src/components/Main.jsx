import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import NewReview from './ReviewForm';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#C5D6D3'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/repository/:id' element={<SingleRepository />}/>
        <Route path='/newReview' element={<NewReview />}/>
        <Route path='/signIn' element={<SignIn />} exact />
        <Route path='/signUp' element={<SignUp />}/>
        <Route path='/' element= {<RepositoryList />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;