import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Item = ({nama, alamat, email}) =>{
  return (
    <View style={styles.areahasil}>
      <Image source={{uri:`https://robohash.org/${email}`}} style={styles.avatar}/>
      <View style={{marginLeft:10}}>
        <Text style={styles.hasiltextinputdata1}>{nama}</Text>
        <Text style={styles.hasiltextinputdata2}>{alamat}</Text>
        <Text style={styles.hasiltextinputdata2}>{email}</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  )
}

const CRUD_LocalAPI = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [users, setusers] = useState([]);

useEffect (()=>{
getData();
},[]);

const submit = () =>{
  const data = {
  nama: nama,
  alamat: alamat,
  email:email,
  }
  console.log ('data before send', data);
  axios.post('http://10.0.2.2:3004/localusers', data)
  .then(res=>{
    console.log('res: ', res);
    setNama("");
    setAlamat("");
    setEmail("");
    getData();
  })
}

const getData = () =>{
  axios.get('http://10.0.2.2:3004/localusers')
  .then(res=> {console.log('res get data:', res);
  setusers(res.data);
  }) 
}

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>SIMPLE CRUD</Text>
      <View style={styles.area}>
        <Text style={styles.subjudul}>PENDAFTARAN ROBOHASH</Text>
        <Text style={styles.textinputdata}>Nama</Text>
        <TextInput style={styles.textinputan} placeholderTextColor='#bdc3c7' placeholder='Silakan masukan nama Anda'value={nama} onChangeText={(value)=>setNama(value)}/>
        <Text style={styles.textinputdata}>Alamat</Text>
        <TextInput style={styles.textinputan} placeholderTextColor='#bdc3c7' placeholder='Masukan alamat lengkap'value={alamat} onChangeText={(value)=>setAlamat(value)}/>
        <Text style={styles.textinputdata}>Email</Text>
        <TextInput style={styles.textinputan} placeholderTextColor='#bdc3c7' placeholder='Masukan email aktif'value={email} onChangeText={(value)=>setEmail(value)}/>
      </View>
      <View style={styles.viewtombol}>
      <Button title='Simpan' color='black' onPress={submit}/>
      </View>
      <View style={styles.garis}/>
      <View style={styles.area}>
      <Text style={styles.subjudul}>HASIL FORM</Text>
      {users.map(user=>{
        return <Item key={user.id} nama={user.nama} alamat={user.alamat} email={user.email}/>
      })}
      {/* <Item/>
      <Item/>
      <Item/> */}
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
    width:80,
    height:80,
    borderRadius:80,
    borderColor:'black',
    borderWidth:1
  },
  areahasil:{
    flexDirection:'row',
    backgroundColor: '#a29bfe',
    marginHorizontal:20,
    alignItems:'center',
    elevation: 5,
    shadowColor: 'black',
    padding:10,
    marginVertical:5
  },
  hasiltextinputdata1:{
    fontSize:20,
    color:'black',
    paddingLeft:20,
    fontWeight:'bold'
  },
  hasiltextinputdata2:{
    fontSize:14,
    color:'#bdc3c7',
    paddingLeft:20,
  },
  delete:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
    position:'absolute', 
    top:10, 
    right:10,
    backgroundColor:'#f8a5c2',
    width:25,
    textAlign:'center',
    borderRadius:25,
    elevation: 5,
    shadowColor: 'black',
  }
})