import { Formik } from "formik"
import { Pressable, StyleSheet, View } from 'react-native';
import * as yup from 'yup'

import Text from "./Text";
import FormikTextInput from "./FormikTextInput"
import useCreateReview from "../hooks/useCreateReview";

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

const ReviewFormContainer = ({ onSubmit }) => {

  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    review: ''
  }

  const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner name is required'),
    repositoryName: yup.string().required('Repository is required'),
    rating: yup.number('Rating must be a number').min(0).max(100).required('Rating is required'),
    review: yup.string()
  })

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const ReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository Name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="review" placeholder="Review" />
      <Pressable  onPress={onSubmit} style={styles.button}>
        <Text style={{ color: 'white' }}>Create a review</Text>
      </Pressable>
    </View>
  )
}

const NewReview = () => {
  const [createReview] = useCreateReview()

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, review } = values

    try {
      await createReview({ repositoryName, ownerName, rating, review })
    } catch (e) {
      console.log(e)
    }
  }

  return <ReviewFormContainer onSubmit={onSubmit} />

}

export default NewReview