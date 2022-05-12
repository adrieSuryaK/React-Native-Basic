import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios'

const CallAPIAxios = () => {
  const[dataUser, setdataUser] = useState({
    avatar:'',
    email:'',
    first_name:'',
    last_name:'',
  })

  const [dataJob, setdataJob] = useState({
    name:'',
    job:'',
  })

  const getData = () =>{
    // fetch('https://reqres.in/api/users/2')
    // .then(response => response.json())
    // .then(json => {
    //   console.log(json)
    //   setdataUser(json.data)
    // })
    axios.get('https://reqres.in/api/users/2')
    .then(result => {
      setdataUser(result.data.data);
    })
    .catch(err => console.log('err: ', err))
  }
  
  const postData =()=>{
    const dataForAPI={
          name: "morpheus",
          job: "leader"
      }
      axios.post('https://reqres.in/api/users', dataForAPI)
      .then (result => {
        setdataJob(result.data);
      })
      .catch(err => console.log('err: ', err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Call API Dengan AXIOS</Text>
      <Button title='GET DATA' color="#ff5c5c" onPress={getData}/>
      <Text style={styles.judul}>Respon dari GET DATA</Text>
      {dataUser.avatar.length > 0 && (
   <Image source={{uri:dataUser.avatar}} style={styles.foto}/>
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line}/>
      <Button title='POST DATA' color="#ff5c5c" onPress={postData}/>
      <Text style={styles.judul}>Respon dari POST DATA</Text>
      <Text style={styles.judul}>{dataJob.name}</Text>
      <Text style={styles.judul}>{dataJob.job}</Text>
    </View>
  )
}

export default CallAPIAxios

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  judul:{
    textAlign:'center',
    marginVertical:20
  },
  line:{
    backgroundColor:'black',
    height:2,
    marginVertical:20
  },
  foto:{
    width:80,
    height:80,
    borderRadius:80
  }
})