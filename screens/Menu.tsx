import { StyleSheet, FlatList, Button, TextInput,  ActivityIndicator } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { RepasCard } from '../components/RepasCard'
import { useState, useEffect, SetStateAction } from 'react';



const REPAS_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titre: 'First Item',
    category: 'First Item',
    image: 'https://st.depositphotos.com/2251655/2442/i/600/depositphotos_24425155-stock-photo-healthy-meal.jpg',
    price: '1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titre: '2 Item',
    category: '2 Item',
    image: 'https://st.depositphotos.com/2251655/2442/i/600/depositphotos_24425155-stock-photo-healthy-meal.jpg',
    price: '2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titre: '3 Item',
    category: 'category 3',
    image: 'https://st.depositphotos.com/2251655/2442/i/600/depositphotos_24425155-stock-photo-healthy-meal.jpg',
    price: '3',
  },
];



export default function TabOneScreen({ navigation, route }: RootTabScreenProps<'TabOne'>) {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([] as any);
  const [error, setError] = useState(null);


  
  
    const [query, setQuery] = useState('');
    const [fullData, setFullData] = useState([] as any);

   useEffect(() => {
    setIsLoading(true);

    const API_ENDPOINT = "https://04d0-90-73-140-2.ngrok.io/api/products"

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(results => {
        setData(results); 
        // setData(REPAS_DATA)

        setFullData(results);
        // setFullData(REPAS_DATA);

        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, []);




  const handleSearch = (text: any) => {
    const formattedQuery = text.toLowerCase();
    // console.log(formattedQuery);
    
    const filteredData = fullData.filter((item: any) => {
      return contains(item, formattedQuery);
    })
     setData(filteredData);
    setQuery(text);
  };

  const contains = (item: any, query: any) => {
    if((item.titre.toString()).match(query)){
      return true;
    }
  return false;
};


    const onTapRestaurant = () => {  

    }

      function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
       {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />  */}


      <FlatList 
        showsHorizontalScrollIndicator={false}

        ListHeaderComponent={renderHeader}
        data={fullData}
        renderItem ={({ item }) =>  <RepasCard item={item} onTap={onTapRestaurant} /> } 
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
