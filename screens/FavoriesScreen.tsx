import { useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';






const DIPO_DATA = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    message: 'Lundi Prochain',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    message: 'Mardi Prochain',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    message: 'Mercredi Prochain',
  },
];

const Item = ({propA} : {propA:any}) => (
  <View >
    <Text style={styles.title}>{propA}</Text>
  </View>
);

export default function TabTwoScreen() {

 

//   const renderItem = ({propA} : {propA:any}) => (
//      <View>
//       <Text style={styles.title}>{propA.message}</Text>
//     </View>
//   );

//   _renderItem = ({item}) => (
//   <TouchableOpacity onPress={() => this._onPress(item)}>
//     <Text>{item.title}</Text>
//   <TouchableOpacity/>
// );

  const [isSelected, setSelection] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
       {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />  */}


      <FlatList 
        showsHorizontalScrollIndicator={false}
        data={DIPO_DATA}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title} >{item.message}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
