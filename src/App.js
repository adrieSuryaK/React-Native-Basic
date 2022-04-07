import React from 'react';
import {View, ScrollView} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import SampleComponent from './pages/SampleComponent';
import FlexBox from './pages/FlexBox';
import PositionComponent from './pages/PositionComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox/> 
        <PositionComponent/>
      </ScrollView>
    </View>
  );
};

export default App;
