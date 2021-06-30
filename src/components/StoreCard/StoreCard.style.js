import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 2.5,
    width: Dimensions.get('window').width / 2.1,
    backgroundColor: '#EDEFF1',
    padding: 8,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').scale,
    flex: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 5,
  },
  inStock: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});
