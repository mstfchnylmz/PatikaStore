import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({storeData}) => {
  console.log(storeData);
  const inStockText = storeData.inStock.toString();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: storeData.imgURL}}></Image>
      <Text style={styles.title}>{storeData.title}</Text>
      <Text style={styles.price}>{storeData.price}</Text>
      {inStockText === 'false' && (
        <Text style={styles.inStock}>{'STOKTA YOK'}</Text>
      )}
    </View>
  );
};

export default StoreCard;
