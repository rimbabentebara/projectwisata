import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import logo1 from './../assets/icon/logonama.png'
import logo2 from './../assets/icon/logobig.png'


const Lainnya = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',top:10}}>
            <Image source={logo1} style={{width:150,height:60,left:20}}/>
            <Image source={logo2} style={{width:70,height:80,right:20}}/>
            </View>

            <View style={styles.menuWrapper}>
                <View style={{borderTopColor:'#dddddd',
                      right:20,
                      width:400,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,
                      top:15}}>
                        <TouchableOpacity onPress={() => navigation.navigate("TentangScreen")}>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Tentang</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{borderTopColor:'#dddddd',
                      right:20,
                      width:400,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,
                      top:-25}}>
                          <TouchableOpacity onPress={() => navigation.navigate("FavoritDestinasiScreen")}>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Favorit destinasi</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{borderTopColor:'#dddddd',
                      right:20,
                      width:400,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,
                      top:-65}}>
                        <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Kritik dan Saran</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{borderTopColor:'#dddddd',
                      right:20,
                      width:400,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,
                      top:-105}}>
                          <TouchableOpacity>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Nilai Aplikasi</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={{borderTopColor:'#dddddd',
                      right:20,
                      width:400,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,
                      top:-145}}>

                     <View style={{flex:1}}>
                    <View style={{justifyContent:'center',alignItems:'center',top:50}}>
                    <Text style={{fontSize:15}}>App Version 1.0</Text>
                    <Text style={{fontSize:15,top:13,color:'#a9a9a9'}}>Hak Cipta @ 2021</Text>
                    <Text style={{fontSize:15,fontWeight:'bold',top:9,color:'#000000'}}>Dinas Kebudayaan Dan Pariwisata Belitung Timur</Text>
                    <TouchableOpacity>
                    <Text style={{fontSize:15,color:'#0085CC',top:13}}>www.disbudpar.beltim.go.ig</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
        </View>
    )
}

export default Lainnya;

const styles = StyleSheet.create({
    menuWrapper:{
        marginTop:10,
    },
    menuItem:{
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:30,
    },
    menuItemText:{
        color:'#000000',
        marginLeft:20,
        fontWeight:'600',
        fontSize:16,
        lineHeight:26,
    },
})
