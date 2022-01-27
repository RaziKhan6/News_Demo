/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
//import React from 'react';
import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {RootStackParamList} from './App';
import FastImage from 'react-native-fast-image';
import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';

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

export const ProductList: React.FC<Props<'ProductList'>> = (props: Props) => {
  //const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = React.useState([]);

  // useEffect(() => {
  //   loadProducts(page);
  // }, [loadProducts, page]);

  // useEffect(() => {
  //   loadProducts(page);
  // }, [loadProducts, page]);

  // const loadProducts = useCallback(async currentPage => {
  //   //const loadProducts = useCallback(async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://newsapi.org/v2/everything?q=tesla&from=2021-12-27&sortBy=publishedAt&apiKey=340b7c822fe44f9d81d54f5e26fb71f5&page=${currentPage}`,
  //       // 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-27&sortBy=publishedAt&apiKey=340b7c822fe44f9d81d54f5e26fb71f5',
  //     );
  //     setData(res.data);
  //     //const json = await JSON.stringify(response.data);
  //     //console.warn(json);
  //     setLoading(false);
  //   } catch (error) {
  //     //console.warn(error);
  //     setLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    getDataUsingAsyncAwaitGetCall();
  }, []);

  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=tesla&from=2021-12-27&sortBy=publishedAt&apiKey=340b7c822fe44f9d81d54f5e26fb71f5',
      );
      setData(response.data);
      //const json = await JSON.stringify(response.data);
      //console.warn(json);
      setLoading(false);
    } catch (error) {
      //console.warn(error);
      setLoading(false);
    }
  };

  // const onEndReached = () => {
  //   setPage(val => val + 1);
  // };

  //const keyExtractor = (item) => `${item.id}`

  const renderItem = ({item}) => {
    const backgroundColor = 'white';
    const color = 'black';
    //editUser
    return (
      <Item
        item={item}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
        onPress={() =>
          props.navigation.navigate('ProductDetail', {
            image: item.urlToImage,
            title: item.title,
            description: item.description,
          })
        }
      />
    );
  };

  return (
    <View style={{flex: 1, padding: 0}}>
      {isLoading ? (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'normal',
            letterSpacing: 1.0,
            lineHeight: 30,
            textAlign: 'center',
            textTransform: 'none',
            padding: 30,
          }}>
          Data Loading...
        </Text>
      ) : (
        <SafeAreaView style={styles.container}>
          {/* <FlatList data={DATA} renderItem={renderItem} /> */}
          <FlatList
            data={data.articles}
            renderItem={renderItem}
            //keyExtractor= {keyExtractor}
            //onEndReached={onEndReached}
          />
        </SafeAreaView>
      )}
    </View>
    // <SafeAreaView style={styles.container}>
    //   {/* <FlatList data={DATA} renderItem={renderItem} /> */}
    //   <FlatList data={data.articles} renderItem={renderItem} />
    // </SafeAreaView>
  );
};

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FastImage
          style={{width: 70, height: 70}}
          source={{
            uri: item.urlToImage,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
          //alignItems="center"
        />
      </View>
      <View
        style={{
          flex: 4,
          backgroundColor: 'white',
          textAlignVertical: 'bottom',
        }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.title, textColor]}>
          {item.title}
        </Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[styles.description, textColor]}>
          {item.description}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 2,
  },
  item: {
    padding: 0,
    marginVertical: 2,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 30,
  },
  description: {
    fontSize: 20,
  },
});
