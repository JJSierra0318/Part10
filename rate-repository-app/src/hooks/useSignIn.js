import { useMutation } from "@apollo/client"

import { AUTHENTICATE } from "../graphql/mutations"

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({username, password}) => {

    const response = mutate( { variables: { username, password } })

    return response
  }

  return [signIn, result]
}

export default useSignIn