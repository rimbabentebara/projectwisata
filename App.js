import React from 'react';
import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rumah from '././src/assets/icon/home.png';
import info from '././src/assets/icon/file.png';
import denah from '././src/assets/icon/map.png';
import menu from './src/assets/icon/lainnya.png';
import Destinasi from './src/AppLatihan/DestinasiScreen';
import Informasi from './src/AppLatihan/InformasiScreen';
import Lainnya from './src/AppLatihan/LainnyaScreen';
import HomeScreen from './src/AppLatihan/HomeScreen';
import SplashScreen from './src/AppLatihan/SplashScreen';
import FavoritDestinasiScreen from './src/AppLatihan/FavoritDestinasiScreen';
import DetailInformasiScreen1 from './src/AppLatihan/DetailInformasiScreen1';
import DetailInformasiScreen2 from './src/AppLatihan/DetailInformasiScreen2';
import DetailInformasiScreen3 from './src/AppLatihan/DetailInformasiScreen3';
import DetailDestinasiScreen from './src/AppLatihan/DetailDestinasiScreen';
import ResultTextScreen from './src/AppLatihan/ResultTextScreen';
import SemuaScreen from './src/AppLatihan/SemuaScreen';
import DetailInformasiScreen from './src/AppLatihan/DetailInformasiScreen';
import TentangScreen from './src/AppLatihan/TentangScreen';
import DetailLaskarPelangi from './src/AppLatihan/DetailLaskarPelangi';
import DetailPantaiNyiur from './src/AppLatihan/DetailPantaiNyiur';
import DetailVihara from './src/AppLatihan/DetailVihara';
import DetailTebatRasau from './src/AppLatihan/DetailTebatRasau';
import DetailOpenPit from './src/AppLatihan/DetailOpenPit';
import DetailGunongLumut from './src/AppLatihan/DetailGunongLumut';
import DetailTanjungTinggi from './src/AppLatihan/DetailTanjungTinggi';
import DetailMuseumKata from './src/AppLatihan/DetailMuseumKata';
import DetailBukulimau from './src/AppLatihan/DetailBukulimau';
import Covid from './src/AppLatihan/Covid';
import SearchScreen from './src/AppLatihan/SearchScreen';


const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
      <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="FavoritDestinasiScreen" component={FavoritDestinasiScreen} options={{headerShown:false}}/>
      <Stack.Screen name="DetailInformasiScreen" component={DetailInformasiScreen} options={{headerShown:false}} />
      <Stack.Screen name="DetailInformasiScreen1" component={DetailInformasiScreen1} options={{headerShown:false}}/>
      <Stack.Screen name="DetailInformasiScreen2" component={DetailInformasiScreen2} options={{headerShown:false}}/>
      <Stack.Screen name="DetailInformasiScreen3" component={DetailInformasiScreen3} options={{headerShown:false}}/>
      <Stack.Screen name="DetailDestinasiScreen" component={DetailDestinasiScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Destinasi" component={Destinasi} options={{headerShown:false}} />
      <Stack.Screen name="ResultTextScreen" component={ResultTextScreen} options={{headerShown:false}} />
      <Stack.Screen name="SemuaScreen" component={SemuaScreen} options={{headerShown:false}} />
      <Stack.Screen name="Informasi" component={Informasi} options={{headerShown:false}} />
      <Stack.Screen name="Lain" component={Lainnya} options={{headerShown:false}} />
      <Stack.Screen name="TentangScreen" component={TentangScreen} options={{headerShown:false}} />
      <Stack.Screen name="DetailLaskarPelangi" component={DetailLaskarPelangi} options={{headerShown:false}}/>
      <Stack.Screen name="DetailPantaiNyiur" component={DetailPantaiNyiur} options={{headerShown:false}}/>
      <Stack.Screen name="DetailVihara" component={DetailVihara} options={{headerShown:false}}/>
      <Stack.Screen name="DetailTebatRasau" component={DetailTebatRasau} options={{headerShown:false}}/>
      <Stack.Screen name="DetailOpenPit" component={DetailOpenPit} options={{headerShown:false}}/>
      <Stack.Screen name="DetailGunongLumut" component={DetailGunongLumut} options={{headerShown:false}}/>
      <Stack.Screen name="DetailTanjungTinggi" component={DetailTanjungTinggi} options={{headerShown:false}}/>
      <Stack.Screen name="DetailMuseumKata" component={DetailMuseumKata} options={{headerShown:false}}/>
      <Stack.Screen name="DetailBukulimau" component={DetailBukulimau} options={{headerShown:false}}/>
      <Stack.Screen name="Covid" component={Covid} options={{headerShown:false}}/>
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
)
  }


const Tab = createBottomTabNavigator();


function Main ()  {
  
  return (

      <Tab.Navigator  screenOptions={{
        tabBarShowLabel:false,
      }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false , tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center',}}>
            <Image source={Rumah} style={{width:25,height:25,}}/>
            <Text style={{color:focused ? '#0085CC' : '#748c94',fontSize:12}}>Beranda</Text>
          </View>
        )}} />
        <Tab.Screen name="Destinasi" component={Destinasi} options={{headerShown:false , tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center',}}>
            <Image source={info} style={{width:25,height:25,}}/>
            <Text style={{color:focused ? '#0085CC' : '#748c94',fontSize:12}}>Destinasi</Text>
          </View>
        )}} />
        <Tab.Screen name="Informasi" component={Informasi} options={{headerShown:false , tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center',}}>
            <Image source={denah} style={{width:25,height:25,}}/>
            <Text style={{color:focused ? '#0085CC' : '#748c94',fontSize:12}}>Informasi</Text>
          </View>
        )}} />
        <Tab.Screen name="Lainnya" component={Lainnya} options={{headerShown:false , tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center',}}>
            <Image source={menu} style={{width:33,height:25,}}/>
            <Text style={{color:focused ? '#0085CC' : '#748c94',fontSize:12}}>Lainnya</Text>
          </View>
        )}} />
        </Tab.Navigator>
    
  )
}






export default App;

const styles = StyleSheet.create({})
