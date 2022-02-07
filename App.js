import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Details from './Details';

const App = () => {
 
  const Stack = createStackNavigator();
  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home} />
        <Stack.Screen name="details" component={Details} />
       
      </Stack.Navigator>
    </NavigationContainer>


  );
};

export default App;