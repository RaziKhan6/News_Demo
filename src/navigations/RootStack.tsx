import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from 'src/types/RootStackParams';

interface Props {}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ProductList"
        getComponent={() => require('@screens/ProductList').default}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShadowVisible: false,
        }}
        getComponent={() => require('@screens/ProductDetail').default}
        name="ProductDetail"
      />
    </Stack.Navigator>
  );
};

export default RootStack;
