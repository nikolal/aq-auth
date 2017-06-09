import React, { Component }from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import List from './List.js'


class Profile extends Component {

  state = {
    items: [
      {'value': 'Item1', 'key': 0, iconURL: require("../../../assets/images/avatar.jpg")},
      {'value': 'Item2', 'key': 1, iconURL: require("../../../assets/images/avatar.jpg")},
      {'value': 'Item3', 'key': 2, iconURL: require("../../../assets/images/avatar.jpg")},
      {'value': 'Item4', 'key': 3, iconURL: require("../../../assets/images/avatar.jpg")},
      {'value': 'Item5', 'key': 4, iconURL: require("../../../assets/images/avatar.jpg")},
      {'value': 'Item6', 'key': 5, iconURL: require("../../../assets/images/avatar.jpg")},
      {'value': 'Item7', 'key': 6, iconURL: require("../../../assets/images/avatar.jpg")},
    ]
  }

  render(){
   const { items } = this.state

    return (
      <View style={styles.container}>

        <Image
          style={styles.image}
          source={require('../../../assets/images/background.jpeg')}
          resizeMode='cover'
          blurRadius={0.5}
        />

        <View style={styles.containerText}>

          <Image
            style={styles.imageAvatar}
            source={require('../../../assets/images/avatar.jpg')}
          />
          <Text style={styles.username}>Username</Text>

          <List 
            items = {items}
          />

        </View>

      </View>
    )
  }
}
export default Profile

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    backgroundColor: 'purple',
    opacity: 0.8,
  },
  containerText: {
    width: width,
    height: height,
    position: 'absolute',
  },
  imageAvatar: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  username: {
    color: 'white',
    fontSize: 25
  }
})