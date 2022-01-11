import { StyleSheet,ImageBackground,Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function TabFiveScreen() {


const image = { uri: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" };

  return (
    <View style={styles.headerContainer}>
      
            <Image
            source={image}
            style={styles.profileImage}
          />
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5 }}>Julien</Text>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5  }}>BERT</Text>
        </View> 
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5 }}>Type</Text>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5  }}>Client</Text>
        </View> 
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5 }}>Solde</Text>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5  }}>20€</Text>
        </View> 
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5 }}>Total de Points</Text>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5  }}>385</Text>
        </View> 
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5 }}>Total de Commandes</Text>
            <Text style={{ fontSize: 16, lineHeight: 22, padding:5  }}>29</Text>
        </View> 
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  cardContainer: {
    flex: 1,
  },
  // container: {
  //   flex: 1,
  // },
  coverBio: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },
  coverContainer: {
    marginBottom: 55,
    position: 'relative',
  },
  // coverImage: {
  //   height: Dimensions.get('window').width * (3.5 / 4),
  //   width: Dimensions.get('window').width,
  // },
  coverMetaContainer: {
    backgroundColor: 'transparent',
    paddingBottom: 10,
    paddingLeft: 135,
  },
  coverName: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  coverTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  coverTitleContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 45,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  indicatorTab: {
    backgroundColor: 'transparent',
  },
  masonryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 0,
    marginRight: 0,
  },
  profileImage: {
    borderColor: '#FFF',
    borderRadius: 55,
    borderWidth: 3,
    height: 110,
    width: 110,
  },
  profileImageContainer: {
    bottom: 0,
    left: 10,
    position: 'absolute',
  },
  sceneContainer: {
    marginTop: 15,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  tabBar: {
    backgroundColor: 'transparent',
    marginBottom: -10,
    marginLeft: 120,
    marginRight: 5,
  },
  tabContainer: {
    flex: 1,
    marginBottom: 12,
    marginTop: -55,
    position: 'relative',
    zIndex: 10,
  },
  tabRow: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  tabLabelNumber: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 2,
  },
  tabLabelText: {
    color: 'black',
    fontSize: 10,
    textAlign: 'left',
  },
  
});
