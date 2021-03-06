import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn';

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

const validationSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required'),
  password: yup.string()
    .required('Password is required')
})

const initialValues = {
  username: '',
  password: ''
}

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  )
}

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" testID='usernameField'/>
      <FormikTextInput name="password" placeholder="Password" testID='passwordField' secureTextEntry={true} />
      <Pressable onPress={onSubmit} style={styles.button} testID='signInButton'>
        <Text style={{color: 'white'}}>Sign In</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
    } catch(e) {
      console.log(e)
    }
  }

  return <SignInContainer onSubmit={onSubmit}/>
};

export default SignIn;