import { useParams } from "react-router-native"
import Text from "./Text"

const SingleRepository = () => {

  const id = useParams();
  console.log(id);

  return (
    <Text>HELLO</Text>
  )
}

export default SingleRepository