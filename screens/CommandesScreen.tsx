import { useState, useEffect } from 'react';
import { StyleSheet,FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {

const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([] as any);
  const [error, setError] = useState(null);



      const onTapRestaurant = () => {  

    }
  
  
    const [query, setQuery] = useState('');
    const [fullData, setFullData] = useState([] as any);

    useEffect(() => {
    setIsLoading(true);

    const API_ENDPOINT = "https://04d0-90-73-140-2.ngrok.io/api/commandes/1"

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
        data={fullData}
        renderItem={({ item }) => (
           <TouchableOpacity style={styles.container}>
                {/* Restaurant Info */}

              <View style={{flexDirection: 'row'}}>
              <Text style={{ textAlign: 'left', fontSize: 20, lineHeight: 30, fontWeight: "bold" }}>Commande {item.id} </Text>
              <Text style={{ textAlign: 'left', fontSize: 20, lineHeight: 30 }}>{item.status}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{ fontSize: 16, lineHeight: 22, padding:5 }}>Commandé par : {item.client.username}</Text>
              </View> 
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{ fontSize: 16, lineHeight: 22, padding:5 }}>Livré par : {item.cuisinier.username}</Text>
              </View> 
              {
              item.product.map((product, key) => {
                  return <Text > 1x {product.titre}</Text>
                })
              }
              <Text style={{ textAlign: 'left', fontSize: 16 }}>Prix total : {item.price_total}</Text>
              <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          </TouchableOpacity>
          
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 5,
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
