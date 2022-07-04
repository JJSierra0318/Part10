import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";


const useSignIn = () => {
  let navigate = useNavigate()
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({username, password}) => {

    const response = await mutate( { variables: { username, password } })
    await authStorage.setAccessToken(response.data.authenticate.accessToken)
    navigate('/', {replace: true})
    return response
  }

  return [signIn, result]
}

export default useSignIn