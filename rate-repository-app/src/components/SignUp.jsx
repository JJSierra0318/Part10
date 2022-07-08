import { Formik } from "formik"
import { Pressable, View, StyleSheet } from "react-native"
import * as yup from 'yup'
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

const SignUpContainer = ({ onSubmit }) => {

  const initialValues = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required').min(1).max(30),
    password: yup.string().required('Password is required').min(5).max(50),
    confirmPassword: yup.string().required('Password confirmation is required').oneOf([yup.ref('password')], 'Passwords do not match')
  })

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
      <FormikTextInput name="confirmPassword" placeholder="Password confirmation" secureTextEntry={true} />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={{ color: 'white' }}>Sign Up</Text>
      </Pressable>
    </View>

  )
}

const SignUp = () => {

  const onSubmit = async (values) => {
    console.log(values)
  }

  return <SignUpContainer onSubmit={onSubmit} />

}

export default SignUp