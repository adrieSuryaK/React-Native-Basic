import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, {useEffect, useState} from 'react'

const CallAPIVanilaJS = () => {
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

  // useEffect(()=>{
  //   //call api method get
  //   fetch('https://reqres.in/api/users/2')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  

  // //call api method post
  // const dataForAPI={
  //     name: "morpheus",
  //     job: "leader"
  // }
  // console.log('data object: ', dataForAPI);
  // console.log('data stringify: ', JSON.stringify(dataForAPI));
  // fetch('https://reqres.in/api/users', {
  //   method:'POST',
  //   headers:{
  //     'Content-Type':'application/json'
  //   },
  //   body: JSON.stringify(dataForAPI)
  // })
  // .then(response=>response.json())
  // .then(json=>{
  //   console.log('post response: ', json)
  // })

  // },[]);

  const getData = () =>{
    fetch('https://reqres.in/api/users/2')
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => {
      console.log(json)
      setdataUser(json.data)
    })
  }
  
  const postData =()=>{
    const dataForAPI={
          name: "morpheus",
          job: "leader"
      }
      fetch('https://reqres.in/api/users', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(dataForAPI)
      })
      .then(response=>response.json())
      .then(json=>{
        console.log('post response: ', json)
        setdataJob(json)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Call API Dengan Vanila JS</Text>
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

export default CallAPIVanilaJS

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