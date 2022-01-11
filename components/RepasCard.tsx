
import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native'


const screenWidth = Dimensions.get('screen').width;


// RepasCard
interface RestaurantProps{ 
    item: any
    onTap: Function;
 }

const RepasCard: React.FC<RestaurantProps> = ({ item, onTap }) => {

return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
                {/* Restaurant Info */}
        <View style={{flexDirection: "column"}}>
            <Text style={{  fontSize: 20, lineHeight: 30 }}>{item.titre}</Text>
            <Image style={{ width: screenWidth - 20, height: 220, borderRadius: 20, backgroundColor: '#EAEAEA' }} 
            source={{ uri: `${item.image}`}}
            />
        </View>
        <View  style={{flexDirection: "column"}}>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 2}}>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5 }}>{"\n"}{"\n"}{item.category}</Text>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5, fontWeight: "bold"  }}>{"\n"}{"\n"}{item.price}€</Text>
        </View> 

        </View>

    </TouchableOpacity>

)}

const styles = StyleSheet.create({
    container: { 
        width: screenWidth - 20,
         height: 230,
          justifyContent: 'space-around',
           alignItems: 'center',
           margin: 50,
            borderRadius: 20 },
})

 export { RepasCard }