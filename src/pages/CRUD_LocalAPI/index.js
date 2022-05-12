import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'
import React from 'react'

const Item = () =>{
  return (
    <View style={styles.areahasil}>
      <Image source={{uri:'https://robohash.org/adrie@email.com'}} style={styles.avatar}/>
      <View style={{marginLeft:10}}>
        <Text style={styles.hasiltextinputdata1}>Nama Lengkap</Text>
        <Text style={styles.hasiltextinputdata2}>Alamat</Text>
        <Text style={styles.hasiltextinputdata2}>Email</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  )
}

const CRUD_LocalAPI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>SIMPLE CRUD</Text>
      <View style={styles.area}>
        <Text style={styles.subjudul}>FORM DAFTAR MAHASISWA</Text>
        <Text style={styles.textinputdata}>Nama</Text>
        <TextInput style={styles.textinputan} placeholderTextColor='#bdc3c7' placeholder='Silakan masukan nama Anda'/>
        <Text style={styles.textinputdata}>Alamat</Text>
        <TextInput style={styles.textinputan} placeholderTextColor='#bdc3c7' placeholder='Masukan alamat lengkap'/>
        <Text style={styles.textinputdata}>Email</Text>
        <TextInput style={styles.textinputan} placeholderTextColor='#bdc3c7' placeholder='Masukan email aktif'/>
      </View>
      <View style={styles.viewtombol}>
      <Button title='Simpan' color='black'/>
      </View>
      <View style={styles.garis}/>
      <View style={styles.area}>
      <Text style={styles.subjudul}>HASIL PENYIMPANAN FORM</Text>
      <Item/>
      <Item/>
      <Item/>
      </View>
    </View>
  )
}

export default CRUD_LocalAPI

const styles = StyleSheet.create({
  container:{
    padding:10
  },
  judul:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#f8a5c2',
    fontSize:40,
    padding:10,
  },
  area:{
    flex:1,
    paddingHorizontal:10,
    paddingBottom:20,
    backgroundColor: '#a29bfe',
    marginHorizontal:10,
    marginTop:10,
    marginBottom:30,
    borderRadius:20,
    elevation: 5,
    shadowColor: 'black',
  },
  subjudul:{
    textAlign:'center',
    fontSize:20,
    paddingVertical:20,
    color:'black',
    fontWeight:'bold'
  },
  textinputdata:{
    fontSize:18,
    color:'black',
    paddingLeft:20,
    marginBottom:10
  },
  textinputan:{
    backgroundColor:'#6c5ce7',
    fontSize:18,
    marginHorizontal:20,
    borderRadius:20,
    color:'white',
    paddingLeft:20,
    height:50,
    textAlign:'center',
    marginBottom:10
  },
  viewtombol:{
    paddingHorizontal:100
  },
  garis:{
    height:2,
    backgroundColor: 'white',
    marginVertical:30
  },
  avatar:{
    width:100,
    height:100,
    borderRadius:100,
    borderColor:'black',
    borderWidth:1,
    marginTop:20
  },
  areahasil:{
    flexDirection:'row',
    backgroundColor: '#a29bfe',
    marginHorizontal:20,
    marginBottom:20,
    alignItems:'center'
  },
  hasiltextinputdata1:{
    fontSize:18,
    color:'white',
    paddingLeft:20,
    fontWeight:'bold'
  },
  hasiltextinputdata2:{
    fontSize:18,
    color:'black',
    paddingLeft:20,
  },
  delete:{
    fontSize:20,
    color:'red',
    fontWeight:'bold',
    position:'absolute', 
    top:0, 
    right:0,
    marginTop:25
  }
})