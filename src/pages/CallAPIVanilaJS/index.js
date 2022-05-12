import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const CallAPIVanilaJS = () => {
  useEffect(()=>{
    //call api method get
    fetch('https://reqres.in/api/users/2')
    .then(response => response.json())
    .then(json => console.log(json))

  //call api method post
  const dataForAPI={
      name: "morpheus",
      job: "leader"
  }
  console.log('data object: ', dataForAPI);
  console.log('data stringify: ', JSON.stringify(dataForAPI));
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
  })

  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Call API Dengan Vanila JS</Text>
    </View>
  )
}

export default CallAPIVanilaJS

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  judul:{
    textAlign:'center'
  }
})