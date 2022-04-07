import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 100, height: 100, backgroundColor: '#686de0'}} />
      <Text>Text dari App</Text>
      <FunctionalComponent />
      <GreenBoxComponent />
      <Foto />
      <GambarProfile />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

// functional component

const FunctionalComponent = () => {
  return <Text>Text dari functional component</Text>;
};

const Foto = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/animals'}}
      style={{width: 100, height: 100}}
    />
  );
};

// class component
class GreenBoxComponent extends Component {
  render() {
    return <Text>Text dari class component</Text>;
  }
}

class GambarProfile extends Component {
  render() {
    return (
      <View>
        <Text>Ini gambar dari class component</Text>
        <Image
          source={{uri: 'https://placeimg.com/100/100/nature'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
      </View>
    );
  }
}

export default SampleComponent;