import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import back from './../assets/icon/left-arrow.png';
import fav1 from './../assets/image/fav1.jpg';
import fav2 from './../assets/image/fav2.jpg';

const FavoritDestinasiScreen = ({navigation}) => {
    return (
        <View >
            <View style={{flexDirection:'row',alignItems:'center',top:15,left:15}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={back} style={{width:30,height:30}}/>
                </TouchableOpacity>
            <Text style={{fontWeight:'bold',color:'#000000',fontSize:20,left:10}}>Favorit Destinasi</Text>
            </View>

            <View style={{ top:35,
                      borderTopColor:'#dddddd',
                      width:400,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:40}}/>

            <TouchableOpacity onPress={() => navigation.navigate("DetailTebatRasau")} >
                    <View style={{flexDirection:'row',alignItems:'flex-start',left:20,top:15}}>
                          <Image source={fav1} style={{width:65,height:65,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>Geosite Tebat Rasau</Text>
                          <Text style={{top:1,fontSize:13,color:'#a3a3a3'}}>Wisata Air</Text>
                          <Text style={{top:5,fontSize:13,fontWeight:'600'}}>Jl.K.A.Bujang, Batu Penyu,Blitung Timur...</Text>
                          </View>
                      </View>
                      </TouchableOpacity>
              <View style={{ top:35,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:40}}/>

            <TouchableOpacity onPress={() => navigation.navigate('DetailGunongLumut')}>
                    <View style={{flexDirection:'row',alignItems:'flex-start',left:20,top:15}}>
                          <Image source={fav2} style={{width:65,height:65,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>Geosite Gunong Lumut</Text>
                          <Text style={{top:1,fontSize:13,color:'#a3a3a3'}}>Wisata Alam</Text>
                          <Text style={{top:5,fontSize:13,fontWeight:'600'}}>Jl.K.A.Bujang, Batu Penyu,Blitung Timur</Text>
                          </View>
                      </View>
                      </TouchableOpacity>
              <View style={{ top:35,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:40}}/>

          </View>
    )
}

export default FavoritDestinasiScreen

const styles = StyleSheet.create({})
