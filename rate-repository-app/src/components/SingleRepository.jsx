import { useParams } from "react-router-native"

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";


const SingleRepository = () => {

  const { id } = useParams();
  const { repository } = useRepository({ id })
  
  if (!repository) return null

  return (
    <>
      <RepositoryItem data={repository} />
    </>
    
  )
}

export default SingleRepository