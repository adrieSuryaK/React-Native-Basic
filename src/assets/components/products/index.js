/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Laptop from '../../images/laptop.jpg';

const Products = props => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={Laptop} style={styles.gambar} />
        <Text style={styles.textjudulbarang}>Laptop Asus</Text>
        <Text style={styles.textharga}>Rp 10.000.000</Text>
        <Text style={styles.textlokasi}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.tombolBeli}>
          <View style={styles.button}>
            <Text style={styles.textbutton}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  judul: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 10,
    marginLeft: 80,
  },
  wrapper: {
    padding: 12,
    backgroundColor: '#f0932b',
    width: 212,
    borderRadius: 20,
  },
  gambar: {
    width: 188,
    height: 107,
    borderRadius: 20,
  },
  textjudulbarang: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  textharga: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#dff9fb',
    marginTop: 12,
  },
  textlokasi: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#eb4d4b',
    marginTop: 12,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6ab04c',
    // paddingTop: 6,
    // paddingBottom: 6,
    paddingVertical: 6,
    borderRadius: 20,
  },
  textbutton: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
