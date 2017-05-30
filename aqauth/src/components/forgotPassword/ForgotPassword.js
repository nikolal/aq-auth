import React, { Component }from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  TouchableOpacity
} from 'react-native'

import ButtonSubmit from '../common/ButtonSubmit.js'
import Inputs from './Inputs.js'

class ForgotPassword extends Component {

  state = {
    inputs:[
      {  key: 0, type: 'email', placeholder: 'Email', value: '', error: 'Invalid Email'},
    ],
    showError: false
  }

  updateInputValue = (key, text, state) => {
    const newInputs = state.inputs.slice()
    newInputs[key].value = text
    this.setState({ inputs: newInputs })
    console.log(this.state)
  }

  submit = () => {
    this.setState({ showError: true })
  }

  render(){
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/background.jpeg')}
          resizeMode='cover'
        />

        <View style={styles.containerText}>
          <Text style={styles.textRegister}>Forgot Password</Text>

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
            text='Submit'
          />

        </View>
      </View>
    )
  }
}
export default ForgotPassword

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
    justifyContent: 'space-around',
    width: width,
    height: height,
    position: 'absolute',
    paddingVertical: 80,
    paddingHorizontal: 30,
    paddingBottom: 150
  },
  textRegister: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  descriptionext: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15
  }
})