import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import fav2 from './../assets/image/fav2.jpg';
import fav3 from './../assets/image/fav3.jpg';



const WisataAlamScreen = ({navigation}) => {
    return (
        <ScrollView>
        <View style={{flex:1}}>
            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailGunongLumut')}>
                <View style={styles.categoryIcon}>
                    <Image source={fav2} style={{width:150,height:170,borderRadius:20}}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Geosite Gunong</Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Lumut</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailOpenPit')}>
                <View style={styles.categoryIcon}>
                    <Image source={fav3} style={{width:150,height:170,borderRadius:20}}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Open Pit Kik</Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Karak</Text>
                </View>
                </TouchableOpacity>
                </View>
        </View>
        </ScrollView>
    )
}

export default WisataAlamScreen

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
