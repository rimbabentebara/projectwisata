import React, {useState} from 'react';
import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image } from 'react-native';
import gbr1 from './../assets/image/gbr1.jpg';
import back from './../assets/icon/left-arrow.png';
import share from './../assets/icon/share.png';
import love from './../assets/icon/heart.png';
import psd1 from './../assets/image/psd1.jpg';
import psd2 from './../assets/image/psd2.jpg';
import psd3 from './../assets/image/psd3.jpg';
import psd4 from './../assets/image/psd4.jpg';

const DetailDestinasiScreen = ({navigation}) => {
    const [Img, setImg] = useState(gbr1, psd1, psd2, psd3, psd4)
    return (
        <View style={{flex:1}}>
        <ScrollView>

        <View>
        <Image source={Img} style={{width:370,height:250}}/>
        </View>
       
        <View style={{zIndex:1,position:'absolute',top:10,flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{borderWidth:0,left:15,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:40,
        height:40,
        backgroundColor: '#FFFFFF',
        borderRadius:50,}}>
        <Image source={back} style={{width:40,height:30}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:0,left:210,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:40,
        height:40,
        backgroundColor: '#FFFFFF',
        borderRadius:50,}}>
        <Image source={love} style={{width:30,height:30}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:0,left:225,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:40,
        height:40,
        backgroundColor: '#FFFFFF',
        borderRadius:50}}>
        <Image source={share} style={{width:30,height:30}}/>
        </TouchableOpacity>
        </View>

        <View style={{left:20,marginTop:15}}>
            <Text style={{fontSize:25,fontWeight:'bold',color:'#000000'}}>Pantai Serdang</Text>
            <Text style={{color:'#9096A0'}}>Wisata Air</Text>
            <Text style={{marginRight:35,marginTop:10,color:'#000000'}}>Pantai ini menghadap laut Cina Selatan di sisi Timur pulau Belitung. Lautan
                 yang luas membuat ombak di pantai ini cendrung lebih besar dibandingkan pantai-pantai
                  Belitung lainnya yang terkenal dengan ombaknya yang tenang.</Text>
        </View>
        <View style={{ top:20,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:10,}}/>

        <View style={{left:20}}>
             <Text style={{color:'#9096A0',marginTop:25}}>Telepon</Text>
             <Text style={{color:'#000000',marginTop:5,fontSize:16}}>0895-1592-2124</Text>
        </View>

        <View style={{left:20}}>
             <Text style={{color:'#9096A0',marginTop:25}}>Instagram</Text>
             <Text style={{color:'#000000',marginTop:5,fontSize:16}}>@pantaiserdang</Text>
        </View>

        <View style={{ marginTop:20,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:10,}}/>

        <View style={{left:20}}>
             <Text style={{color:'#9096A0',marginTop:10}}>Galeri</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:10,left:20,right:30}}>
            <TouchableOpacity onPress={()=>setImg(gbr1)}>
            <Image source={gbr1} style={{width:60,height:60,borderRadius:10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setImg(psd1)}>
            <Image source={psd1} style={{width:60,height:60,left:5,borderRadius:10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setImg(psd2)}>
            <Image source={psd2} style={{width:60,height:60,left:10,borderRadius:10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setImg(psd3)}>
            <Image source={psd3} style={{width:60,height:60,left:15,borderRadius:10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setImg(psd4)}>
            <Image source={psd4} style={{width:60,height:60,left:20,borderRadius:10}}/>
            </TouchableOpacity>
        </View>

        <View style={{ marginTop:20,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:10,}}/>

        <View style={{left:20}}>
             <Text style={{color:'#9096A0',marginTop:10}}>Lokasi</Text>
             <Text style={{marginRight:35,marginTop:5,color:'#000000'}}>Desa Baru Kecamatan Manggar Kabupaten Belitung Timur</Text>
        </View>


        </ScrollView>
        </View>
    )
}

export default DetailDestinasiScreen

const styles = StyleSheet.create({})
