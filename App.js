import React from 'react';
import {View, ScrollView} from 'react-native';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import SampleComponent from './SampleComponent';
import MateriFlexbox from './MateriFlexbox';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        <MateriFlexbox/>
      </ScrollView>
    </View>
  );
};

export default App;
