/* eslint-disable react-native/no-inline-styles */
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App';
import React from 'react';
import {Text, View, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import FastImage from 'react-native-fast-image';

type ScreenNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};
// export const ProductDetail: React.FC<Props<'ProductDetail'>> = ({route}) => {
//   return (
//     // eslint-disable-next-line react-native/no-inline-styles
//     <ScrollView style={{backgroundColor: 'white'}}>
//       <View style={{flex: 1, flexDirection: 'column'}}>
//         <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
//           <FastImage
//             // style={{
//             //   width: Dimensions.get('window').width,
//             //   height: Dimensions.get('window').width,
//             // }}
//             style={{aspectRatio: 1}}
//             source={{
//               uri: route.params.image,
//               headers: {Authorization: 'someAuthToken'},
//               priority: FastImage.priority.normal,
//             }}
//             resizeMode={FastImage.resizeMode.cover}
//           />
//         </View>
//         <View style={{flex: 1, backgroundColor: 'white'}}>
//           <Text
//             style={{
//               fontSize: 30,
//               fontWeight: 'bold',
//               fontStyle: 'normal',
//               letterSpacing: 1.0,
//               lineHeight: 30,
//               textAlign: 'left',
//               textTransform: 'none',
//               padding: 10,
//             }}>
//             {route.params.title}
//           </Text>
//           <Text
//             style={{
//               marginTop: -15,
//               fontSize: 24,
//               fontWeight: '200',
//               fontStyle: 'normal',
//               letterSpacing: 1.0,
//               lineHeight: 33,
//               textAlign: 'left',
//               textTransform: 'none',
//               padding: 10,
//             }}>
//             {route.params.description}
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

export const ProductDetail: React.FC<Props<'ProductDetail'>> = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 0, backgroundColor: 'white'}}>
        <FastImage
          //style={{aspectRatio: 1, backgroundColor: 'yellow'}}
          resizeMode={FastImage.resizeMode.contain}
          source={{
            uri: route.params.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          style={{
            flex: 0,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
            backgroundColor: 'lightgrey',
          }}
        />
        <View style={{flex: 0, backgroundColor: 'white'}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              fontStyle: 'normal',
              letterSpacing: 1.0,
              lineHeight: 30,
              textAlign: 'left',
              textTransform: 'none',
              padding: 10,
            }}>
            {route.params.title}
          </Text>
          <Text
            style={{
              marginTop: -15,
              fontSize: 24,
              fontWeight: '200',
              fontStyle: 'normal',
              letterSpacing: 1.0,
              lineHeight: 33,
              textAlign: 'left',
              textTransform: 'none',
              padding: 10,
            }}>
            {route.params.description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
