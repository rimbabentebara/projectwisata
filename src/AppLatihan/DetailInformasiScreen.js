import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
import dtinfo from './../assets/image/dtinfo1.jpg';
import back from './../assets/icon/left-arrow.png';
import share from './../assets/icon/share.png';

const DetailInformasiScreen = ({navigation}) => {
    return (
        
        
        <View style={{flex:1}}>
            <ScrollView style={{flex: 1}}>
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

            <View style={{marginTop:20,left:15,right:15,marginRight:40}}>
                <Text style={{fontSize:26,fontWeight:'bold',color:'#000000'}}>SMP Negeri 4 Manggar Terima Bibit Buah</Text>
                <Text style={{fontSize:13,marginTop:5}}>20 Oktober 2021</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>Manggar, Diskominfo Beltim— Anggota DPRD Kabupaten Belitung Timur (Beltim), 
                Koko Haryanto mengatakan pemanfaatan lahan kosong ataupun kritis sangat penting dilakukan oleh masyarakat pasca tambang di Kabupaten Beltim.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Hal itu disampaikan Koko dalam Sosialisasi Pemulihan Lahan dan Penyerahan Bibit sekaligus penyerahan bibit buah oleh pihak Fordas 
                Goes To School di SMP Negeri 4 Manggar,  Kamis (18/11).
                “Dalam kegiatan Fordas Goes To School diharapkan ada kegiatan  pemulihan lahan-lahan, khususnya lahan pasca tambang. Lahan kritis itu
                 nantinya akan dihijaukan kembali.,” ujar Koko.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Upaya dalam pemulihan lahan bekas tambang antara lain pihak Fordas membagikan bibit tanaman 
                buah seperti bibit kopi, alpukat dan buah-buahan lainnya sebanyak 100 bibit.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Kami berharap bibit-bibit tersebut nantinya akan membuat hutan sekolah menjadi lebih hijau dan hasilnya bisa dinikmati  pihak sekolah,” kata Koko.
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Selain memberikan bibit, Fordas juga melakukan MoU  kerjasama dengan  pihak SMP Negeri 4 Manggar yang tujuannya agar kedua
                 belah pihak sama-sama 
                melakukan pemulihan  lahan pasca tambang.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Sementara itu,  Hamsiyah selaku Kepala Sekolah SMP Negeri 4 Manggar, SMP Negeri 4 Manggar masih perlu pengijauan apalagi didukung halaman yang luas sehingga membutuhkan banyak tanaman.
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Kami sangat berterima kasih dengan Fordas yang sudah memberikan bantuan bibit untuk pihak sekolah, ujar Hamsiyah
                </Text>
            </View>
            </ScrollView>
        </View>
        
        
    )
}

export default DetailInformasiScreen



const styles = StyleSheet.create({})
