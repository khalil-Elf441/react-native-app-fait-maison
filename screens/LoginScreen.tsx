import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StyleSheet,TextInput,TouchableOpacity, Button, Alert,Picker } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackScreenProps } from '../types';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { useState } from 'react';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {



    const getRepasFromApiAsync = async () => {
//   try {
//     const response = await fetch(
//       'https://04d0-90-73-140-2.ngrok.io/api/authenticate/'
//     );
//     const json = await response.json();
//     console.log(json)
//     return json.movies;
//   } catch (error) {
//     console.error(error);
//   }


   let link = "https://04d0-90-73-140-2.ngrok.io/api/authenticate/"+"?username="+username+"&password="+password+"&type="+selectedValue
   console.log(selectedValue);
     try {
    const response = await fetch(link);

    let json

    if (response.status == 200){

        json = await response.json();
    
        console.log(json);
        console.log(response.status);

        navigation.navigate('Root');
// , { userIdparam: 'Some Param from previous Screen',}


    }else{

        Alert.alert(
            "Login",
            "sorry we couldn't find an account with this username",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
         );
    }


    return json;
  } catch (error) {
    console.error(error);
  }


}


      const onPressLearnMore = () => {
       
      getRepasFromApiAsync();

    }


    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [selectedValue, setSelectedValue] = useState("Cuisinier");


// export type StackParams = {
//    tabs: undefined;
// }

// RootStackParamList

// const Stack = createNativeStackNavigator<RootStackParamList>();
// const navigation = useNavigation<RootStackParamList>()


  return (
    <View style={styles.container}>
              {/* <Button onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/> */}

        <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={username=>setusername(username)}
            defaultValue={username}
            />
            <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
            onChangeText={password=>setpassword(password)}
            defaultValue={password}
            />

                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 220 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="cuisinier" value="cuisinier" />
                    <Picker.Item label="client" value="client" />
                </Picker>

            <TouchableOpacity style={styles.addItemButton} onPress={onPressLearnMore} >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigation.replace('Register')}>
            <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabFourScreen.tsx" /> */}
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
  input: {
    padding: 12,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    width:220,
  },
form: {
    marginTop: 25,
  },
    addItemButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
    row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
  },
  link: {
    fontWeight: 'bold',
  },

   buttonText: {color: '#fff', fontWeight: '500'},
});


function setItem(text: string): void {
    
}

function GoToLogin(){
    // const navigation = useNavigation()

    // console.log(navigation)

    // navigation.navigate("Root")



}

