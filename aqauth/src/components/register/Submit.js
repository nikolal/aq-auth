import React from 'react'
import {
  StyleSheet,
  Text,
  Button,
  TouchableOpacity
} from 'react-native'

const Submit = ({ submit }) => {
  return(
    <TouchableOpacity 
      style={styles.button}
      onPress={() => submit()}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  )
}

export default Submit

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    height: 40,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
})

