import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0366d6',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    paddingTop: 15,
    width: 250,
    height: 50
  }
})

const initialValues = {
  username: '',
  password: ''
}

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={{color: 'white'}}>Sign In</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {

  const onSubmit = values => {
    const username = values.username
    const password = values.password

    if (username && password) {
      console.log(`${username} succesfully signed in`)
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  )
};

export default SignIn;