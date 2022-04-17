/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import { Component } from 'react/cjs/react.production.min';

//state hooks
const Counter = () => {
  const [nomor, setNomor] = useState(0);
  return (
    <View>
      {/* <Text>0</Text> */}
      <Text>{nomor}</Text>
      <Button title="MENU TAMBAH KE-1" color={'#eb4d4b'} onPress={()=>setNomor(nomor+1)}
      style={styles.tombol}
      />
    </View>
  );
};

//state class
class CounterClass extends Component {
  state={
    angka:0,
  }
  render(){
    return(
      <View>
      {/* <Text>0</Text> */}
      <Text>{this.state.angka}</Text>
      <Button title="MENU TAMBAH KE-1" color={'#eb4d4b'} onPress={()=>this.setState({angka:this.state.angka+1})}
      style={styles.tombol}
      />
    </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>MEMAHAMI STATE DINAMIS</Text>
      <Text style={styles.tulisan}>State menggunakan hooks / functional component.</Text>
      <Counter />
      <Counter />
      <Text style={styles.tulisan}>State menggunakan class component.</Text>
      <CounterClass/>
      <CounterClass/>
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  judul: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom:20
  },
  tulisan:{
    marginVertical:10
  }
});
