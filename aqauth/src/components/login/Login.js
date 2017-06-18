import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Inputs from './Inputs.js';
import ButtonSubmit from '../common/ButtonSubmit.js';

class Login extends Component {

  state = {
    inputs:[
      {  key: 0, type: 'email', placeholder: 'Email', value: '', error: 'Invalid Email'},
      {  key: 1, type: 'password', placeholder: 'Password', value: '', error: 'Password must be longer then 5 characters'},
    ],
    showError: false
  }

  updateInputValue = (key, text, state) => {
    const newInputs = state.inputs.slice();
    newInputs[key].value = text;
    this.setState({ inputs: newInputs });
    console.log(this.state);
  }

  submit = () => {
    this.setState({ showError: true });
  }

  render(){
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./background.jpeg')}
          resizeMode="cover"
        />

        <View style={styles.containerText}>
          <Text style={styles.textLogin}>Login</Text>

          <Text style={styles.descriptionext}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eum delectus incidunt at.
          </Text>

          <Inputs
            state={this.state}
            updateInputValue={this.updateInputValue}
          />

          <ButtonSubmit
            onPress={() => this.submit()}
            text="Login"
          />

          <View style={styles.bottomTextContainer}>
            <TouchableOpacity>
              <Text style={styles.bottomText}>Go to Register</Text>
            </TouchableOpacity>

            <Text style={styles.bottomText}>|</Text>
            <TouchableOpacity>
              <Text style={styles.bottomText}>Forgot Pasword</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}
export default Login;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    backgroundColor: 'purple',
    opacity: 0.8,
  },
  containerText: {
    justifyContent: 'space-around',
    width: width,
    height: height,
    position: 'absolute',
    paddingVertical: 80,
    paddingHorizontal: 30,
    paddingBottom: 150
  },
  textLogin: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  descriptionext: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomText: {
    color: 'white',
    fontSize: 15
  }
});
