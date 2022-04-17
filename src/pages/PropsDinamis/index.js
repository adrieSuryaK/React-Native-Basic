/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 80 / 2,
          borderWidth: 2,
          borderColor: '#ffbe76',
        }}
      />
      <Text style={{textAlign: 'center', maxWidth: 80}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View style={{backgroundColor: '#f6e58d', height: '100%'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color: '#f0932b',
          marginBottom: 10,
        }}>
        MATERI PROPS DINAMIS
      </Text>
      <ScrollView horizontal style={{paddingBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="story ke-1"
            gambar="https://instagram.fsoc1-2.fna.fbcdn.net/v/t51.2885-19/275582126_131668396060162_31314700535378079_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsoc1-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=jRCXJDjCDHAAX9125mo&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8vaYOUL0tRVvED_5CzH0N3gb53EyWt1hDIuyK_hSnkjA&oe=626299F2&_nc_sid=9a90d6"
          />
          <Story
            judul="story ke-2"
            gambar="https://instagram.fsoc1-2.fna.fbcdn.net/v/t51.2885-19/103294905_2935719483143531_2304757722735528760_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsoc1-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=QrH-80rtGXIAX9oU9ss&tn=IDFUrUbQfkEnNkyJ&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-uqHwg1LqljfntKSQ4HD1jSRJEJv8dFDbilAeAHpcNCQ&oe=62625FBC&_nc_sid=7bff83"
          />
          <Story
            judul="story ke-3"
            gambar="https://instagram.fsoc1-1.fna.fbcdn.net/v/t51.2885-19/277692098_360235402694315_178046671226597243_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsoc1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=0KJGfO04qXQAX-xdEg4&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-TzpVYuikXdgFLI8dXdB7CGQq7uoi-01_O4Bcp828CCA&oe=6263B7C1&_nc_sid=7bff83"
          />
          <Story
            judul="story ke-4"
            gambar="https://instagram.fsoc1-1.fna.fbcdn.net/v/t51.2885-19/274510053_438808708026531_4901628771189631166_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsoc1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=IaDtRaZch7sAX_DcRSF&tn=IDFUrUbQfkEnNkyJ&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT-N-BWSTSGivWscf1aC53Uuc4PtPYVI_2qiFG4Moe2BPQ&oe=6263C730&_nc_sid=9a90d6"
          />
          <Story
            judul="story ke-5"
            gambar="https://instagram.fsoc1-1.fna.fbcdn.net/v/t51.2885-19/72951134_2412764795508199_1524105652207616000_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsoc1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=E8RYVCvo-ZwAX8VMS9V&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_q_NIDye22bTwzQHd3uzGXFkKPsdMEIxK389YVPC3DJg&oe=6262CA32&_nc_sid=7bff83"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;
