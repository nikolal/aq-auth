import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

const List = ({ items }) => {

    return (

      <ScrollView>
        {
          items.map((item, index) => {
            return(
              <View 
                style={styles.listContainer}
                key={item.key}
              >
                <Image
                  source={item.iconURL}
                />
                <Text>
                  {item.value}
                </Text>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
  }
})