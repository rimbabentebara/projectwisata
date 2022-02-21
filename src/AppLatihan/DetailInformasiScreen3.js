import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
import dtinfo from './../assets/image/info1.jpg';
import back from './../assets/icon/left-arrow.png';
import share from './../assets/icon/share.png';

const DetailInformasiScreen3 = ({navigation}) => {
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
                <Text style={{fontSize:26,fontWeight:'bold',color:'#000000'}}>Adakan Kejurkab Tinju 2022</Text>
                <Text style={{fontSize:13,marginTop:5}}>03 November 2021</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>Manggar, Diskominfo Beltim – Ketua KONI 
                Beltim Kamarudin mengucapkan selamat atas pelantikan pengurus PERTINA Kabupaten Beltim. 
                Meski diungkapkan Kamarudin pelantikan sangat terlambat, namun Ia optimis akan banyak 
                perubahan di bawah kepemimpinan Idwan Fikri.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Walau pun pelantikan ini bisa dikatakan terlambat, Muskabnya di April pelantikannya baru
                 November namun kita harap PERTINA dapat mengejar ketertinggalan, baik kepelatihan, program
                  penitipan atlet di luar daerah, serta Kejurkab,” ujar Toyo sapaan sehari-hari Kamarudin
                   saat menghadiri Pengukuhan Personalia Pengurusan PERTINA Kabupaten Belitung Timur masa
                    bakti 2021 – 2025 di Café Vega Manggar, Rabu (3/11/21)..</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Toyo menekankan pentingnya PERTINA mengikuti program penjaringan dan peningkatan prestasi
                 atlet supaya mampu mengukur kemampuan atlet sebelum  ajang Porprov 2023 mendatang.</Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Dan intinya kepada pengurus PERTINA yang baru, mereka harus berjuang, bersinergi dengan
                 KONI agar PERTINA dapat menyumbangkan medali emas di ajang Porprov nanti,” kata Toyo.
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Toyo juga berharap PERTINA Beltim dapat menggelar kejuaraan tinju kabupaten dalam waktu dekat,
                 meski anggaran hibah KONI Beltim untuk PERTINA sudah tidak bisa dialokasikan, lantaran 
                 keterlambatan pelantikan pengurus PERTINA. </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Saya yakin walau tidak menggunakan anggaran hibah dari KONI, Ketua PERTINA Kabupaten Beltim 
                mampu menggelar Kejurkab Tinju sebagai tolak ukur. Insyallah kalau jadi, saya pribadi juga
                 akan bantu untuk sumbang Kejurkab,” kelakar Toyo.
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Sementara itu, Ketua PERTINA Kabupaten Beltim Idwan Fikri menyatakan kejurkab tinju baru akan
                 dilaksanakan pada tahun 2022 mendatang. Mengingat banyak hal penting yang harus dilakukan dalam
                  waktu dekat ini.
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Untuk Kejurkab kami akan berkoordinasi dulu dengan yang Bupati dan Ketua KONI. Jadi sifatnya
                 menyusul, yang pasti di tahun 2022,” kata Idwan.
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Saat ini Idwan mengatakan Ia ingin melakukan konsolidasi dan pembenahan dulu di dalam internal PERTINA Beltim.
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                “Di awal ini kami ingin membenahi kepengurusan dulu, sarana prasarana dulu, terutama untuk sasana, kita konsolidasi dulu,” ujar Idwan.
                </Text>
                <Text style={{fontSize:13,marginTop:5,color:'#000000'}}>
                Acara pengukuhan Personalia Pengurusan PERTINA Kabupaten Belitung Timur dihadiri oleh Ketua DPRD Beltim Fezzi Uktolseja, Staf ahli Bupati dan Forkopimda Beltim. 
                </Text>
            </View>
            </ScrollView>
            </View>
        </View>
        
    )
}

export default DetailInformasiScreen3



const styles = StyleSheet.create({})
