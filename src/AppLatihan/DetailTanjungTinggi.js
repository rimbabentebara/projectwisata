import React, {useState} from 'react';
import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image } from 'react-native';
import fav4 from './../assets/image/fav4.jpg';
import back from './../assets/icon/left-arrow.png';
import share from './../assets/icon/share.png';
import love from './../assets/icon/heart.png';
import ptt from './../assets/image/ptt.jpg';
import ptt1 from './../assets/image/ptt1.jpg';
import ptt2 from './../assets/image/ptt2.jpg';
import ptt3 from './../assets/image/ptt3.jpg';



const DetailTanjungTinggi = ({navigation}) => {
    const [Img, setImg] = useState(fav4, ptt, ptt1, ptt2, ptt3)
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
            <Text style={{fontSize:25,fontWeight:'bold',color:'#000000'}}>Pantai Tanjung Tinggi</Text>
            <Text style={{color:'#9096A0'}}>Wisata Air</Text>
            <Text style={{marginRight:35,marginTop:10,color:'#000000'}}>Pantai Tanjung Tinggi identik dengan 
            batu granit besar di sekelilingnya. Nama Tanjung Tinggi sendiri berasal dari dua kata yaitu 
            tanjung berarti semenanjung, dan tinggi berarti pantai yang memiliki bebatuan yang tinggi.</Text>
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
             <Text style={{color:'#000000',marginTop:5,fontSize:16}}>@tanggungtinggi</Text>
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
            <TouchableOpacity onPress={()=>setImg(fav4)}>
            <Image source={fav4} style={{width:60,height:60,borderRadius:10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setImg(ptt)}>
            <Image source={ptt} style={{width:60,height:60,left:5,borderRadius:10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setImg(ptt1)}>
            <Image source={ptt1} style={{width:60,height:60,left:10,borderRadius:10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setImg(ptt2)}>
            <Image source={ptt2} style={{width:60,height:60,left:15,borderRadius:10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setImg(ptt3)}>
            <Image source={ptt3} style={{width:60,height:60,left:20,borderRadius:10}}/>
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
             <Text style={{marginRight:35,marginTop:5,color:'#000000'}}>Kecamatan Sijuk, Kabupaten Belitung, Bangka Belitung. Terletak di sebelah utara pulau Belitung, jaraknya 37 km dari pusat kota Tanjungpandan.</Text>
        </View>


        </ScrollView>
        </View>
    )
}

export default DetailTanjungTinggi

const styles = StyleSheet.create({})
