import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function PositioningReactNative() {
  return (
    <View style={styles.wrapper}>
      <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>Materi Position</Text>
      <View style={styles.wrapperKeranjang}>
        <Image source={{uri:'https://cdn.icon-icons.com/icons2/1144/PNG/512/shoppingcart_80945.png'}} style={styles.iconKeranjang} />
        <Text style={styles.notifikasi}>10</Text>
      </View>
      <Text>Keranjang belanja anda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper : {padding:20, alignItems:'center', position:'relative'},
  wrapperKeranjang : {borderWidth:1, borderColor:'#ff4757', width: 90, height:90, borderRadius:45, justifyContent: 'center', alignItems: 'center'},
  iconKeranjang : {width:50, height:50},
  notifikasi : {fontSize:12, color:'white', padding:4, backgroundColor:'blue', borderRadius:50, width:25, height:25, textAlign:'center', position:'absolute', top:0, right:0}
})