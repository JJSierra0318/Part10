import { View, Image, StyleSheet } from "react-native"
import Text from "./Text"

const repoStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'stretch',
    width: 350,
    padding: 15,
    alignContent: 'center',
    backgroundColor: 'white'
  }
})

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15
  },
  infoContainer: {
    flexGrow: 1,
    width: 40
  }
})

const statsStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const RepositoryItem = ( {data} ) => {

  let stars = ''
  if (data.stargazersCount > 999) {
    stars = (data.stargazersCount/1000).toFixed(1) + 'k'
  } else {
    stars = data.stargazersCount
  }

  let forks = ''
  if (data.forksCount > 999) {
    forks = (data.forksCount/1000).toFixed(1) + 'k'
  } else {
    forks = data.forksCount
  }

  return (
    <View style={repoStyles.container}>
      <View style={headerStyles.container}>
        <View style={headerStyles.avatarContainer}>
          <Image
            style={headerStyles.avatar}
            source={{
              uri: data.ownerAvatarUrl,
            }}
          />
        </View>
        <View style={headerStyles.infoContainer}>
          <Text color='primary'>{data.fullName}</Text>
          <Text>{data.description}</Text>
          <Text color='textSecondary'>{data.language}</Text>
        </View>
      </View>
      <View style={statsStyle.container}>
        <View style={statsStyle.item}>
          <Text>{stars}</Text>
          <Text>Stars</Text>
        </View>
        <View style={statsStyle.item}>
          <Text>{forks}</Text>
          <Text>Forks</Text>
        </View>
        <View style={statsStyle.item}>
          <Text>{data.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={statsStyle.item}>
          <Text>{data.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem