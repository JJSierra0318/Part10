import { View, StyleSheet } from "react-native"
import { format } from 'date-fns'
import Text from "./Text";

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

const ReviewItem = ({ review }) => {

  const date = format(new Date(review.createdAt), 'dd.MM.yyyy')

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
    </View>
  )
}

export default ReviewItem