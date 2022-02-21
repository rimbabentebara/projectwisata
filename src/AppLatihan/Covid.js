import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
import gambar2 from './../assets/image/gambar2.jpg';
import back from './../assets/icon/left-arrow.png';
import share from './../assets/icon/share.png';

const Covid = ({navigation}) => {
    return (
        
        
        <View style={{flex:1}}>
            <ScrollView style={{flex: 1}}>
            <View>
            <Image source={gambar2} style={{width:370,height:250}}/>
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
                <Text style={{fontSize:26,fontWeight:'bold',color:'#000000'}}>Jagalah Kesehatan Dan Keselamatan Dari Virus-19</Text>
                <Text style={{fontSize:13,marginTop:10,color:'#000000'}}>Mengalahkan penyebaran dan penularan Virus
                corona di dunia tidak mudah. Namun, beragam upaya terus dilakukan para ahli dan penduduk global demi mengakhiri
                ancaman virus yang terus menyerang bertubi-tubi. Di beberapa negara termasuk indonesia, pemerintah membuat pendoman
                 dan protokol kesehatan untuk mengahadapi virus corona. Di negara kita, protolol kesehatan ini dikenal 
                 dengan sebutan 3M. Sudah tahu apa saya protokol kesehatan 5M untuk membantu pencegahan penularan virus vorona? Berikut 
                 ini protokol kesehatan tersebut: 1. Cuci Tangan ,Mencuci tangan secara rutin menjadi protokol
                  kesehatan 5M yang pertama dan dirasa efektif untuk mencegah penularan virus corona. Agar 
                  hasilnya maksimal, kamu disarankan untuk mencuci tangan setidaknya selama 20 detik dengan 
                  \menggunakan air mengalir dan sabun. 2. Pakai Masker ,Saat pandemi mulai melanda dunia, 
                  Organisasi Kesehatan Dunia (WHO) menyebutkan bahwa penggunaan masker hanya dilakukan untuk
                   orang-orang yang terserang penyakit, bukan orang yang sehat. Akan tetapi, pada kenyataannya,
                    pandemi yang masih belum usai dan terus memakan korban membuat penggunaan masker pun diwajibkan
                     untuk seluruh lapisan masyarakat. 3. Menjaga Jarak, Protokol kesehatan 5 M selanjutnya adalah
                      menjaga jarak saat sedang beraktivitas di luar ruangan. Adanya aturan ini juga berdasarkan 
                      pada Keputusan Menteri Kesehatan RI dalam “Protokol Kesehatan Bagi Masyarakat di Tempat dan 
                      Fasilitas Umum Dalam Rangka Pencegahan dan Pengendalian COVID-19.” 4. Menjauhi Kerumunan ,Selain tiga hal di atas, 
                      menjauhi kerumunan juga merupakan protokol kesehatan yang harus dilakukan. Menurut 
                      Kementerian Kesehatan RI (Kemenkes), masyarakat diminta untuk menjauhi kerumunan
                       saat berada di luar rumah. Ingat, semakin banyak dan sering kamu bertemu orang, 
                       maka kemungkinan terinfeksi virus corona pun semakin tinggi. 5. Mengurangi Mobilitas, Virus 
                       penyebab corona bisa berada di mana saja. Jadi, semakin banyak waktu yang kamu habiskan di 
                       luar rumah, maka semakin tinggi pula risiko tubuh terpapar virus jahat ini. Oleh karena itu, 
                       bila tidak ada keperluan yang mendesak, tetaplah berada di rumah.</Text>
            </View>
            </ScrollView>
        </View>
        
        
    )
}

export default Covid



const styles = StyleSheet.create({})


