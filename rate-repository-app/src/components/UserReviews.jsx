import { FlatList } from "react-native";
import useUserReviews from "../hooks/useUserReviews";
import ReviewItem from "./ReviewItem";

const UserReviews = () => {
  const { me, fetchMore } = useUserReviews({ first: 6 })

  if (!me) return null

  const reviews = me.reviews.edges.map(edge => edge.node)

  const onEndReach = () => {
    fetchMore();
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default UserReviews;