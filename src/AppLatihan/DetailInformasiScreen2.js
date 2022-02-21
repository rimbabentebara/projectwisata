import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
import dtinfo from './../assets/image/info3.jpg';
import back from './../assets/icon/left-arrow.png';
import share from './../assets/icon/share.png';

const DetailInformasiScreen2 = ({navigation}) => {
    return (
        
        <View style={{flex:1}}>
            
            <View>
            <ScrollView>
            <View>
            <Image source={dtinfo} style={{width:370,height:250}}/>
            </View>
            <View style={{zIndex:1,position:'absolute',top:10,flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} style={{width:40,height:30,left:15}}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={share} style={{width:30,height:30,left:260}}/>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:20,left:15,right:15,marginRight:70}}>
                <Text style={{fontSize:26,fontWeight:'bold',color:'#000000'}}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
                <Text style={{fontSize:13,marginTop:5}}>09 November 2021</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>Manggar, Diskominfo Beltim – Salah seorang
                 perserta Bimtek Online Singgel Sub-Mission (OSS) dan LKPM On-Line, Zainal Abidin menyatakan 
                 kegiatan Bimtek sangat bermanfaat bagi para pelaku usaha. Pengurusan perizinan dan juga laporan 
                 secara daring dinilainya sangat mudah.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Ini kan membantu kami biar prosesnya jadi lebih mudah. Kan dulunya sebelum ada bimtek kami
                 belum ngerti, makanya kalau kita ngerti lebih mudah dibanding yang manual,” ungkap Zainal 
                 saat ikut kegiatan Bimbingan Teknis Online Singgel Sub-Mission (OSS) dan LKPM On-Line di 
                 Hotel Guest Manggar, Selasa (9/11/21) .</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Dengan adanya LPKM, menurut Direktur CV Bintang Samudra Abadi ini kegiatan penanaman modal 
                atau proyek-proyek yang dilaksanakan oleh pelaku usaha jadi lebih terpantau.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Kalau dulu dari pemerintah dak bisa mantau CV ini dapat berapa (proyek-red). Kalau sekarang lebih transparan,” ujar Zainal
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                LKPM juga kata Zainal, membuat tidak ada praktik monopoli terhadap proyek-proyek pemerintah 
                oleh sebagian besar pelaku usaha. Hal ini bagus untuk iklam penanaman modal, terutama 
                persaingan usaha.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Sekarang kan dibatasi minimal satu CV, hanya boleh megang maksimal 5 proyek pemerintah.
                 Kalau transparan kan kelihatan siapa pegang proyek mana,” kata Zainal.
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Kegiatan Bimtek Online Singgel Sub-Mission (OSS) dan LKPM On-Line dibuka oleh Kepala 
                DPMPTSPP Kabupaten Beltim Liatim. Kegiatan yang diikuti 100 pelaku usaha di Kabupaten
                 Beltim ini berlangsung selama dua hari, Selasa (9/11/21) dan Rabu (10/11/21). 
                </Text>
            </View>
            </ScrollView>
            </View>
        </View>
        
    )
}

export default DetailInformasiScreen2



const styles = StyleSheet.create({})
