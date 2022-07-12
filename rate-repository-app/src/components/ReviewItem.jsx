import { View, StyleSheet, Pressable, Alert } from "react-native"
import { format } from 'date-fns'
import Text from "./Text";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";
import useUserReviews from "../hooks/useUserReviews";

const reviewStyle = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'stretch',
    width: 350,
    padding: 15,
    marginTop: 15,
    alignContent: 'center',
    backgroundColor: 'white'
  }
})

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  rating: {
    color: 'blue',
    fontWeight: '600'
  },
  ratingContainer: {
    alignItems: 'center',
    flexGrow: 0,
    borderWidth: 1.5,
    borderColor: 'blue',
    borderRadius: 20,
    width: 40,
    height: 40,
    paddingTop: 8
  },
  infoContainer: {
    paddingLeft: 10,
    flexGrow: 1,
    width: 40
  }
})

const footerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    padding: 10,
    marginTop: 10,
    justifyContent: 'center'
  },
  viewButton: {
    width: 150,
    height: 50,
    marginHorizontal: 10,
    backgroundColor: '#0366d6',
  },
  deleteButton: {
    width: 150,
    height: 50,
    marginHorizontal: 10,
    backgroundColor: 'red',
    textAlignVertical: 'center'
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 15
  }
})

const ReviewItem = ({ review }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();
  const { refetch } = useUserReviews();

  const date = format(new Date(review.createdAt), 'dd.MM.yyyy');

  const onDelete = async () => {
    try {
      deleteReview({ id: review.id });
      setTimeout(() => {
        refetch();
      }, 0);
    } catch(e) {
      console.log(e);
    }
  };

  const deleteAlert = () => {
    return (
      Alert.alert(
        "Delete review",
        "Are you sure you want to delete this review?",
        [
          {
            text: 'CANCEL',
            style: 'cancel'
          },
          {
            text: 'DELETE',
            onPress: () => onDelete(),
          },
        ],
      )
    );
  };

  return (
    <View style={reviewStyle.container}>
      <View style={headerStyles.container}>
        <View style={headerStyles.ratingContainer}>
          <Text color='primary'>{review.rating}</Text>
        </View>
        <View style={headerStyles.infoContainer}>
          <Text fontWeight='bold'>{review.user.username}</Text>
          <Text color='textSecondary'>{date}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {review.repositoryId
        ? <View style={footerStyles.container}>
          <Pressable style={footerStyles.viewButton} onPress={() => navigate(`/repository/${review.repositoryId}`)}>
            <Text style={footerStyles.text}>View repository</Text>
          </Pressable>
          <Pressable style={footerStyles.deleteButton} onPress={() => deleteAlert()}>
            <Text style={footerStyles.text}>Delete review</Text>
          </Pressable>
        </View>
        : null}
    </View>
  )
}

export default ReviewItem