import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { NEW_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {

  const navigate = useNavigate();
  const [mutate, result] = useMutation(NEW_REVIEW)

  const createReview = async ({ repositoryName, ownerName, rating, review }) => {

    rating = parseInt(rating);
    const response = await mutate({ variables: { repositoryName, ownerName, rating, review } });
    navigate(`/repository/${response.data.createReview.repositoryId}`, {replace: true});
    return response
  }

  return [createReview, result]

}

export default useCreateReview