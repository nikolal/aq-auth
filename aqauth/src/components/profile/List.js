import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';

const List = ({ items }) => {

    return (

      <View
        style={styles.list}
      >
        {
          items.map((item, index) => {
            return (
              <View
                style={styles.itemContainer}
                key={item.key}
              >
                <Image
                  style={styles.itemImage}
                  source={item.iconURL}
                />
                <Text style={styles.itemText}>
                  {item.value}
                </Text>
              </View>
            );
          })
        }
      </View>
    );
  };
export default List;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  list: {
    width: width,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#61aa7c',
    borderBottomColor: '#1a3022',
    borderBottomWidth: 1
  },
  itemImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 20
  }
});
