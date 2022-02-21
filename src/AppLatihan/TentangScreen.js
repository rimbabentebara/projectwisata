import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import back from './../assets/icon/left-arrow.png';

const TentangScreen = ({navigation}) => {
    return (
        <View >
            <View style={{flexDirection:'row',alignItems:'center',top:15,left:15}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={back} style={{width:30,height:30}}/>
                </TouchableOpacity>
            <Text style={{fontWeight:'bold',color:'#000000',fontSize:20,left:10}}>Tentang</Text>
            </View>

            <View style={{ top:35,
                      borderTopColor:'#dddddd',
                      width:400,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:40}}/>

            <View style={{top:20,left:15,right:15,marginRight:70}}>
                <Text style={{fontSize:26,fontWeight:'bold',color:'#000000'}}>Inspiring Belitung Timur,
                the land of maritime Spices route</Text>
                <Text style={{fontSize:13,top:15,color:'#000000'}}>Aplikasi inspiring Belitung Timur, memudahkan untuk menemukan 
                    wisata-wisata di Kabupaten Belitung Timur</Text>
                <Text style={{fontSize:13,top:30,color:'#000000'}}>Sistem informasi Dan Konten Promosi Multimedia Dinas
                    Kebudayaan Dan Pariwisata Kabupaten Belitung Timur 2021.
                </Text>
            </View>
        </View>
    )
}

export default TentangScreen

const styles = StyleSheet.create({})
