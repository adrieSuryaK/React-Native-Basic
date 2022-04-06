import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';


const App = () => {
  return (
<View>
  <View style={{width: 100, height:100, backgroundColor:'#686de0'}}/>
  <Text>Tes 01</Text>
  <Text>Tes 02</Text>
  <Text>Tes 03</Text>
  <Coba/>
  <Foto/>
  <TextInput style={{borderWidth:1}} />
</View>
  );
};

const Coba = () => {
  return <Text>Tes 04 dari const coba</Text>;
}

const Foto = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/nature'}} style={{width:100, height:100}} />
}

export default App;
