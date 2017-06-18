import React from 'react';
import {TextInput, StyleSheet } from 'react-native';

const InputAuth = ({ placeholder, value, secureTextEntry, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="white"
      value={value}
      secureTextEntry={secureTextEntry}
      underlineColorAndroid="transparent"
      autoCorerrect={false}
      autoCapitalize="none"
      onChangeText={onChangeText}
    />
  );
};

export default InputAuth;

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
    color: 'white',
    borderRadius: 50,
    marginTop: 10
  }
});

