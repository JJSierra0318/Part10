import { useParams } from "react-router-native"
import { FlatList } from "react-native";

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem data={repository} />
}

const SingleRepository = () => {

  const { id } = useParams();
  const { repository, fetchMore } = useRepository({ id, first: 5 });
  
  if (!repository) return null
  
  const reviews = repository.reviews.edges.map(edge => edge.node)

  const onEndReach = () => {
    console.log('END');
    fetchMore();
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default SingleRepository