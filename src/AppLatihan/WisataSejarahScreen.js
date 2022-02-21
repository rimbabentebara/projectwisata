import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import gbr2 from './../assets/image/gbr2.jpg';
import gbr3 from './../assets/image/gbr3.jpg';
import mka from './../assets/image/mka.jpg';



const WisataSejarahScreen = ({navigation}) => {
    return (
        <ScrollView>
        <View style={{flex:1}}>
            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailVihara')}>
                <View style={styles.categoryIcon}>
                    <Image source={gbr2} style={{width:150,height:170,borderRadius:20}}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,alignItems:'center',left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Vihara Patung</Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Dewi Kwan Im</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailLaskarPelangi')}>
                <View style={styles.categoryIcon}>
                    <Image source={gbr3} style={{width:150,height:170,borderRadius:20}}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Replika SD Laskar</Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Pelangi</Text>
                </View>
                </TouchableOpacity>
                </View>
                <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailMuseumKata')}>
                <View style={{left:6}}>
                    <Image source={mka} style={{width:150,height:170,borderRadius:20}}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Museum Kata</Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Andrea Hirata</Text>
                </View>
                </TouchableOpacity>
                </View>

        </View>
        </ScrollView>
    )
}

export default WisataSejarahScreen

const styles = StyleSheet.create({
    categoryContainer:{
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
        marginTop:10,
        marginBottom:10,
        top:5
    },
    categoryBtn:{
        flex:1,
        width:'30%',
        marginHorizontal: 0,
        alignSelf:'center',
    },
    categoryIcon:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
    },
})
