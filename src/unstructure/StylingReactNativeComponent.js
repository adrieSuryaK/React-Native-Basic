import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Laptop from './src/laptop.jpg';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>ini adalah styling component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#2ecc71',
          borderWidth: 2,
          borderColor: '#e74c3c',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#7ed6df',
          width: 212,
          borderRadius: 20,
        }}>
        <Image
          source={Laptop}
          style={{width: 188, height: 107, borderRadius: 20}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Laptop Asus
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#130f40',
            marginTop: 12,
          }}>
          Rp 10.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#6ab04c',
            marginTop: 12,
          }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#22a6b3',
            // paddingTop: 6,
            // paddingBottom: 6,
            paddingVertical: 6,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 10,
    marginLeft: 80,
  },
});

export default StylingReactNativeComponent;
