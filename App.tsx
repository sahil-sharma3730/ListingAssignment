import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import CombinedScreen from './src/screens/Tablet/CombinedScreen';
import ListScreen from './src/screens/Phone/ListScreen';
import DetailScreen from './src/screens/Phone/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CombinedScreen"
          component={CombinedScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          //@ts-ignore
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Config from 'react-native-config';

// const App = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: 'green',
//         // width: '100%',
//         flex: 1,
//         justifyContent: 'center',
//       }}>
//       <Text style={{textAlign: 'center', color: 'white', fontSize: 30}}>
//         {Config.NODE_ENV}
//       </Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
