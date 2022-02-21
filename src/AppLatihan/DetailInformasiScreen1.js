import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
import dtinfo from './../assets/image/info2.jpeg';
import back from './../assets/icon/left-arrow.png';
import share from './../assets/icon/share.png';

const DetailInformasiScreen1 = ({navigation}) => {
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
                <Text style={{fontSize:26,fontWeight:'bold',color:'#000000'}}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
                <Text style={{fontSize:13,marginTop:5}}>03 November 2021</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>Manggar, Diskominfo Beltim – Wakil Bupati Belitung
                 Timur Khairil Anwar mengapresiasi JOB FAIR Belitung Timur 2021 sebagai media bagi perusahaan untuk
                  memperoleh calon tenaga kerja yang sesuai dengan kebutuhan perusahaan dan sekaligus media pencari 
                  kerja memperoleh pekerjaan sesuai dengan kompetensi yang dimiliki.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Jumlah pencari kerja setiap tahun semakin meningkat sedangkan jumlah lowongan kerja yang 
                tersedia sangat sedikit. apalagi pandemi Covid-19 ini, banyak usaha mengalami kemunduran dan
                 ditutup karena tidak mampu lagi membiayai operasionalnya. Adanya pembukaan job fair ini saya
                  sangat dukung,” kata Khairil dalam sambutannya saat pembukaan JOB FAIR Belitung Timur 2021 
                  di SMK Negeri 1 Manggar, Selasa (2/11).</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Khairil berharap melalui kegiatan ini para perusahaan mendapat tenaga kerja yang berkompeten
                 sesuai dengan kualifikasi dan jabatan yang diinginkan.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Saya menghimbau kegiatan seperti ini agar dapat diselenggarakan secara berkelanjutan pada
                 waktu yang akan datang, semakin banyak perusahaan yang ikut berkontribusi dan berpartisipasi,” kata Khairil.
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Sementara itu, Kepala Sekolah SMK N 1 Manggar Triyudo Hendro Susongko mengatakan kegiatan Job
                 Fair ini sudah tiga kali dilaksanakan dan akan dilaksanakan rutin setiap tahun. Disela-sela
                  Job Fair, pihak sekolah juga mengadakan berbagai kegiatan yakni nasi tumpeng, makanan kue
                   tradisional, lomba band dan donor darah.</Text>
            </View>
            </ScrollView>
            </View>
        </View>
        
    )
}

export default DetailInformasiScreen1



const styles = StyleSheet.create({})
