import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFourScreen() {


const NOTIF_DATA = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    message: 'Nouvelle Commande de 88 € !',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    message: 'Nouveau Message !',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    message: 'Nouvelle Commande de 58 € !',
  },
];


  return (

     <FlatList 
        showsHorizontalScrollIndicator={false}
        data={NOTIF_DATA}
        renderItem={({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title} >{item.message}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
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
  item: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,  
  },
});
