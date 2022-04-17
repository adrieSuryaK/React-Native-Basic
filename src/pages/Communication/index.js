/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import Keranjang from '../../assets/components/keranjang';
import Products from '../../assets/components/products';

const Communication = () => {
 const [TotalProduct,setTotalProduct] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>MATERI COMMUNICATION</Text>
      <Products tombolBeli={()=>setTotalProduct(TotalProduct + 1)}/>
      <Keranjang jumlah={TotalProduct}/>
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  container:{
    padding:20,
    alignItems:'center',
  },
  judul:{
    fontSize:20,
    marginBottom:20,
    fontWeight:'bold',
  },
});
