/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductList} from './src/screens/ProductList';
import {ProductDetail} from './src/screens/ProductDetail';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: {
    image: string;
    title: string;
    description: string;
  };
};

const App: React.FC<RootStackParamList> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            title: 'News List',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            title: 'News Detail',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
