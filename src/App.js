import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
} from 'react-native';
import StoreCard from './components/StoreCard';
import LastStoreCard from './components/LastStoreCard';
import patika_store_data from './patika_store_data.json';

function App() {
  const renderStore = ({item}) => <StoreCard storeData={item} />;
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ara..."
      />
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()}
        data={patika_store_data}
        renderItem={renderStore}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 10,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#EDEFF1',
    padding: 15,
    marginHorizontal: 5,
    marginBottom: 5,
    borderRadius: 10,
    fontSize: 18,
  },
});

export default App;
