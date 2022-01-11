import { useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, TextInput, Picker } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';






const DIPO_DATA = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    message: 'Lundi 14-18h',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    message: 'Mercredi 14-18h',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    message: 'Vendredi 14-18h',
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
    const [selectedValue, setSelectedValue] = useState("10€");
    // const [selectedValue2, setSelectedValue2] = useState("10H");
//      padding: 10,
  const [text, onChangeText] = useState("2 Impasse de l Epi, Avignon");
  return (
    <SafeAreaView >
       {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />  */}


      <Text style={styles.title}>Adresse de remise des commandes</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

        <View style={{padding: 10,flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5 }}>Minimum par commande</Text>
              <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="10€" value="10€" />
                    <Picker.Item label="20€" value="20€" />
            </Picker>
        </View> 

        <View style={{padding: 10,flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5 }}>Délai de preparation</Text>
              <Picker
                    // selectedValue={selectedValue2}
                    style={{ height: 50, width: 100 }}
                >
                    <Picker.Item label="10H" value="10H" />
                    <Picker.Item label="20H " value="20H" />
            </Picker>
        </View> 

      <Text style={styles.title}> Jours et horaires de remise des commandes :</Text>




      <FlatList 
        showsHorizontalScrollIndicator={false}
        data={DIPO_DATA}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title} >{item.message}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          flexGrow: 1,
         }}
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
    padding: 10,
  },
  item: {
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
