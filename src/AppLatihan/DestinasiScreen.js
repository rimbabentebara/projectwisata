import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SemuaScreen from './SemuaScreen';
import WisataAlamScreen from './WisataAlamScreen';
import WisataAirScreen from './WisataAirScreen';
import serc from './../assets/icon/serc.png';
import map from './../assets/icon/map1.png';
import WisataSejarahScreen from './WisataSejarahScreen';
import WisataKulinerScreen from './WisataKulinerScreen';
import HotelPenginapanScreen from './HotelPenginapanScreen';
import LayananPublikScreen from './LayananPublikScreen';
import TravelTransportasiScreen from './TravelTransportasiScreen';
import BelanjaScreen from './BelanjaScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Destinasi = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Header" component={Header} options={{headerShown:false}} />
            <Stack.Screen name="Top" component={Top} options={{headerShown:false}} />
            <Stack.Screen name="Wisata Alam" component={WisataAlamScreen} options={{headerShown:false}} />
            <Stack.Screen name="Wisata Air" component={WisataAirScreen} options={{headerShown:false}} />
            <Stack.Screen name="Wisata Kuliner" component={WisataKulinerScreen} options={{headerShown:false}} />
            <Stack.Screen name="Wisata Sejarah" component={WisataSejarahScreen} options={{headerShown:false}} />
            <Stack.Screen name="Hotel Penginapan" component={HotelPenginapanScreen} options={{headerShown:false}} />
            <Stack.Screen name="Layanan Publik" component={LayananPublikScreen} options={{headerShown:false}} />
            <Stack.Screen name="Travel Transportasi" component={TravelTransportasiScreen} options={{headerShown:false}} />
            <Stack.Screen name="Belanja Oleh-Oleh" component={BelanjaScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}
const Header = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{justifyContent:'space-between',flexDirection:'row',top:15}}>
                <Text style={{fontSize:25,fontWeight:'bold',color:'#000000',left:15}}>Destinasi</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                <Image source={serc} style={{width:30,height:30,left:55}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={map} style={{width:30,height:30,right:15}}/>
                </TouchableOpacity>
            </View>
            <View style={{ top:35,
                      borderTopColor:'#dddddd',
                      right:20,
                      width:400,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:37}}></View>
            <Top/>
        </View>
    )
}


const Tab = createMaterialTopTabNavigator();

function Top()  {
    return (
      
    <Tab.Navigator 
      screenOptions={{
      tabBarActiveTintColor: '#0085CC',
      tabBarStyle: { backgroundColor: 'white' },
      tabBarScrollEnabled:true,
    }}>
      <Tab.Screen name="Semua" component={SemuaScreen} />
      <Tab.Screen name="Wisata Alam" component={WisataAlamScreen} />
      <Tab.Screen name="Wisata Air" component={WisataAirScreen} />
      <Tab.Screen name="Wisata Kuliner" component={WisataKulinerScreen} />
      <Tab.Screen name="Wisata Sejarah" component={WisataSejarahScreen}/>
      <Tab.Screen name="Hotel Penginapan" component={HotelPenginapanScreen}/>
      <Tab.Screen name="Layanan Publik" component={LayananPublikScreen}/>
      <Tab.Screen name="Travel Transportasi" component={TravelTransportasiScreen}/>
      <Tab.Screen name="Belanja Oleh-Oleh" component={BelanjaScreen}/>
    </Tab.Navigator>
    )
}


export default Destinasi;


const styles = StyleSheet.create({})    
