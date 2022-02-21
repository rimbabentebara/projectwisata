import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import gbr1 from './../assets/image/gbr1.jpg';
import gbr4 from './../assets/image/gbr4.jpg';
import fav1 from './../assets/image/fav1.jpg';
import fav4 from './../assets/image/fav4.jpg';
import bu from './../assets/image/gambar1.png';


const WisataAirScreen = ({navigation}) => {
    return (
        <ScrollView>
        <View style={{flex:1}}>
            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailDestinasiScreen')}>
                <View style={styles.categoryIcon}>
                    <Image source={gbr1} style={{width:150,height:170,borderRadius:20}}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:140,flexDirection:'row',alignItems:'center',left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Pantai Serdang</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailPantaiNyiur')}>
                <View style={styles.categoryIcon}>
                    <Image source={gbr4} style={{width:150,height:170,borderRadius:20}}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Pantai Nyiur</Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Melambai</Text>
                </View>
                </TouchableOpacity>
                </View>

                <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate("DetailTebatRasau")}>
                <View style={styles.categoryIcon}>
                    <Image source={fav1} style={{width:150,height:170,borderRadius:20}}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:140,flexDirection:'row',alignItems:'center',left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Geosite Tebat Rasau</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailTanjungTinggi')}>
                <View style={styles.categoryIcon}>
                    <Image source={fav4} style={{width:150,height:170,borderRadius:20}}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Pantai Tanjung</Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Tinggi</Text>
                </View>
                </TouchableOpacity>
                </View>
                <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailBukulimau')}>
                <View style={{left:6}}>
                    <Image source={bu} style={{width:150,height:170,borderRadius:20}}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Pulau Bukulimau </Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Underwater</Text>
                </View>
                </TouchableOpacity>
                </View>
                </View>
        </ScrollView>
    )
}

export default WisataAirScreen

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

