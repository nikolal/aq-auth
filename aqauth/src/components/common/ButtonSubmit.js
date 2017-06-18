import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const Submit = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Submit;

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
});


