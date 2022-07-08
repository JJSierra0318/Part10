import { useMutation } from "@apollo/client"
import { NEW_USER } from "../graphql/mutations"
import useSignIn from "./useSignIn"

const useSignUp = () => {

  const [signIn] = useSignIn()
  const [mutate, result] = useMutation(NEW_USER)

  const signUp = async ({ username, password }) => {

    const response = await mutate({ variables: { username, password } })

    try {
      await signIn({ username, password })
    } catch (e) {
      console.log(e);
    }

    return response
  }

  return [signUp, result]

}

export default useSignUp