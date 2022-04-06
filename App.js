import React from 'react';
import {View, ScrollView} from 'react-native';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import SampleComponent from './SampleComponent';
import MateriFlexbox from './MateriFlexbox';
import PositioningReactNative from './PositioningReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <MateriFlexbox/> */}
        <PositioningReactNative/>
      </ScrollView>
    </View>
  );
};

export default App;
