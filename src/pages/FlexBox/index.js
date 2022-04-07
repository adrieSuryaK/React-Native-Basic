import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class FlexBox extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            color: '#130f40',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Materi Flexbox
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#535c68',
            alignItems: 'flex-end',
          }}>
          <View style={{backgroundColor: '#f6e58d', flex: 1, height: 50}} />
          <View style={{backgroundColor: '#eb4d4b', flex: 2, height: 25}} />
          <View style={{backgroundColor: '#30336b', flex: 1, height: 75}} />
          <View style={{backgroundColor: '#badc58', flex: 3, height: 100}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#535c68',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <View style={{backgroundColor: '#0c2461', width: 50, height: 50}} />
          <View style={{backgroundColor: '#f6b93b', width: 50, height: 25}} />
          <View style={{backgroundColor: '#38ada9', width: 50, height: 75}} />
          <View style={{backgroundColor: '#f8c291', width: 50, height: 100}} />
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            backgroundColor: '#ff6b81',
            justifyContent: 'space-around',
          }}>
          <Text>Beranda</Text>
          <Text>Profile</Text>
          <Text>Cari</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/RIAN_archive_100306_Vladimir_Putin%2C_Federal_Security_Service_Director.jpg/170px-RIAN_archive_100306_Vladimir_Putin%2C_Federal_Security_Service_Director.jpg',
            }}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Vladimir Putin
            </Text>
            <Text>Russian Presiden</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
