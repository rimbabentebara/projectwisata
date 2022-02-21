import React from 'react'
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity,ScrollView } from 'react-native';
import logo from './../assets/icon/logobig.png';
import love from './../assets/icon/heart.png';
import serc from './../assets/icon/serc.png';
import gambar from './../assets/image/gambar1.png';
import gbr1 from './../assets/image/gbr1.jpg';
import gbr2 from './../assets/image/gbr2.jpg';
import gbr3 from './../assets/image/gbr3.jpg';
import gbr4 from './../assets/image/gbr4.jpg';
import alam from './../assets/icon/alam.png';
import air from './../assets/icon/air.png';
import belanja from './../assets/icon/belanja.png';
import hotel from './../assets/icon/hotel.png';
import kuliner from './../assets/icon/kuliner.png';
import publik from './../assets/icon/publik.png';
import sejarah from './../assets/icon/sejarah.png';
import travel from './../assets/icon/travel.png';
import gambar2 from './../assets/image/gambar2.jpg';
import info1 from './../assets/image/info1.jpg';
import info2 from './../assets/image/info2.jpeg';
import info3 from './../assets/image/info3.jpg'


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}/>
                <View style={styles.headerText}>
                 <View style={styles.textSerc}>
                <TouchableOpacity style={styles.button}>
                    <Image source={serc} style={styles.iconSerc}/>
                <TextInput
                style={styles.textInput}
                placeholder='Cari Wisata'/>
                </TouchableOpacity>
                </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('FavoritDestinasiScreen')}>
                <Image source={love} style={styles.iconLove}/>
                </TouchableOpacity>
            </View>
          
            <View style={styles.body}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailBukulimau')}>
                <View>
                <Image source={gambar} style={styles.poster}/>
                </View>
                <View  style={{zIndex:1,position:'absolute',top:275,left:15}}>
                    <Text style={styles.fontSmall}>Wisata  Air</Text>
                    <Text style={styles.fontBig}>Pulau Bukulimau</Text>
                    <Text style={styles.fontBig}>Underwater</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.fontDes}>Destinasi Wisata</Text>
                <Text style={styles.fontPil}>Pilihan Terbaik</Text>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailDestinasiScreen')}>
                <View style={styles.categoryIcon}>
                    <Image source={gbr1} style={styles.gambarDes}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:140,flexDirection:'row',alignItems:'center',left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Pantai Serdang</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailVihara')}>
                <View style={styles.categoryIcon}>
                    <Image source={gbr2} style={styles.gambarDes}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,alignItems:'center',left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Vihara Patung</Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Dewi Kwan Im</Text>
                </View>
                </TouchableOpacity>
                </View>
                <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailLaskarPelangi')}>
                <View style={styles.categoryIcon}>
                    <Image source={gbr3} style={styles.gambarDes}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Replika SD Laskar</Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Pelangi</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('DetailPantaiNyiur')}>
                <View style={styles.categoryIcon}>
                    <Image source={gbr4} style={styles.gambarDes}/>
                </View>
                <View style={{zIndex:1,position:'absolute',top:125,left:15}}>
                    <Text style={{fontWeight:'bold',color:'white'}}>Pantai Nyiur</Text>
                    <Text style={{fontWeight:'bold',color:'white'}}>Melambai</Text>
                </View>
                </TouchableOpacity>
                </View>
                <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Destinasi')}>
                <View style={styles.categoryIcon}>
                    <Text style={{color:'#0085CC',fontSize:20}}>Lihat Lainnya</Text>
                </View>
                </TouchableOpacity>
                </View>
                
                <View style={{ top:70,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}/>

            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:25,fontWeight:'bold',color:'#000000'}}>Jelajahi Sekarang</Text>
                <Text style={{fontSize:13}}>Pilih kategori yang diminati</Text>
            </View>

            <View style={styles.category}>
                <TouchableOpacity style={styles.categorybutton} onPress={() => navigation.navigate('Wisata Alam')}>
                <View style={styles.categoryGambar}>
                    <Image source={alam} style={{width:50,height:50}}/>
                    <Text style={styles.categoryBtnTxt}>Wisata</Text>
                    <Text style={{color:'#000000'}}>Alam</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorybutton} onPress={() => {}}>
                <View style={styles.categoryGambar}>
                    <Image source={air} style={{width:50,height:50}}/>
                    <Text style={styles.categoryBtnTxt}>Wisata</Text>
                    <Text style={{color:'#000000'}}>Air</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorybutton} onPress={() => {}}>
                <View style={styles.categoryGambar}>
                    <Image source={kuliner} style={{width:50,height:50}}/>
                    <Text style={styles.categoryBtnTxt}>Wisata</Text>
                    <Text style={{color:'#000000'}}>Kuliner</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorybutton} onPress={() => {}}>
                <View style={styles.categoryGambar}>
                    <Image source={sejarah} style={{width:50,height:50}}/>
                    <Text style={styles.categoryBtnTxt}>Wisata</Text>
                    <Text style={{color:'#000000'}}>Sejarah</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.categoryContainer ,{top:1}]}>
                <TouchableOpacity style={styles.categorybutton} onPress={() => {}}>
                <View style={styles.categoryGambar}>
                    <Image source={hotel} style={{width:50,height:50}}/>
                    <Text style={styles.categoryBtnTxt}>Hotel</Text>
                    <Text style={{color:'#000000'}}>Penginapan</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorybutton} onPress={() => {}}>
                <View style={styles.categoryGambar}>
                    <Image source={publik} style={{width:50,height:50}}/>
                    <Text style={styles.categoryBtnTxt}>Layanan</Text>
                    <Text style={{color:'#000000'}}>Publik</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorybutton} onPress={() => {}}>
                <View style={styles.categoryGambar}>
                    <Image source={travel} style={{width:50,height:50}}/>
                    <Text style={styles.categoryBtnTxt}>Travel</Text>
                    <Text style={{color:'#000000'}}>Transportasi</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorybutton} onPress={() => {}}>
                <View style={styles.categoryGambar}>
                    <Image source={belanja} style={{width:50,height:50}}/>
                    <Text style={styles.categoryBtnTxt}>Belanja</Text>
                    <Text style={{color:'#000000'}}>Oleh-oleh</Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',top:20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Covid')}>
                <Image source={gambar2} style={{width:300,height:180,borderRadius:10}}/>
                </TouchableOpacity>
                <View style={{zIndex:1,position:'absolute',left:50,top:5}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Jaga Kesehatan Dan</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Keselamatan Dari Virus</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Covid-19</Text>
                    <Text style={{fontSize:15,color:'#c2c2c2',top:40}}>Selengkapnya ..... </Text>
                </View>
            </View>

            <View style={{justifyContent:'center',alignItems:'center',top:50}}>
                <Text style={{fontSize:25,fontWeight:'bold',color:'#000000'}}>Informasi dan Berita</Text>
                <Text style={{fontSize:13}}>Seputar Belitung Timur</Text>
            </View>
            
            <View style={{ top:70,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}/>

                    <TouchableOpacity onPress={() => navigation.navigate('DetailInformasiScreen3')}>
                      <View style={{flexDirection:'row',alignItems:'flex-start',left:20}}>
                          <Image source={info1} style={{width:80,height:80,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>Adakan Kerjurkab Tinju 2022</Text>
                          <Text style={{top:5}}>03 November 2021</Text>
                          </View>
                      </View>
                      </TouchableOpacity>

                      <View style={{ top:25,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}/>

                    <TouchableOpacity onPress={() => navigation.navigate('DetailInformasiScreen1')}>
                      <View style={{flexDirection:'row',alignItems:'flex-start',left:20,bottom:50}}>
                          <Image source={info2} style={{width:80,height:80,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>Wabup Beltim Apresiasi Job</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>FairBeltim</Text>
                          <Text style={{top:5}}>03 November 2021</Text>
                          </View>
                      </View>
                      </TouchableOpacity>

                      <View style={{ top:-25,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}/>

                    <TouchableOpacity onPress={() => navigation.navigate('DetailInformasiScreen2')}>
                      <View style={{flexDirection:'row',alignItems:'flex-start',left:20,bottom:100}}>
                          <Image source={info3} style={{width:80,height:80,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:16,fontWeight:'bold',color:'#000000'}}>LKPM Buat Proyek Pemerintah</Text>
                          <Text style={{fontSize:16,fontWeight:'bold',color:'#000000'}}>Jadi Lebih Terpantau</Text>
                          <Text style={{top:5}}>09 November 2021</Text>
                          </View>
                      </View>
                      </TouchableOpacity>

                      <View style={{ top:-75,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}/>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',top:-130}}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Informasi')}>
                <View style={styles.categoryIcon}>
                    <Text style={{color:'#0085CC',fontSize:20}}>Lihat Lainnya</Text>
                </View>
                </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    headerText:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    button:{
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center'
    },
    iconLove:{
        width:34, 
        height:34, 
        top:12,
        right:16
    },
    iconSerc:{
        width:25,
        height:25,
        left:5
    },
    body:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    poster:{
        width:360,
        height:360,
        top:30
    },
    fontSmall:{
        color:'#c2c2c2',
        fontSize:17
    },
    fontBig:{
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    },
    fontDes:{
        fontSize:25,
        fontWeight:'bold',
        color:'#000000',
        top:50
    },
    fontPil:{
        fontSize:15,
        top:55
    },
    gambarDes:{
        width:150,
        height:170,
        borderRadius:20
    },
    logo:{
        width: 30,
        height: 36,
        left: 16,
        top: 12,
    },
    inputView:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        right:2,
    },
    textSerc:{
        borderWidth: 1,
        borderColor: '#000000',
        width: 240,
        borderRadius:30,
        top:16,
    },
    categoryContainer:{
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
        marginTop:25,
        marginBottom:10,
        top:40
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
    category:{
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
        marginTop:25,
        marginBottom:10,
    },
    categorybutton:{
        flex:1,
        width:'30%',
        marginHorizontal: 0,
        alignSelf:'center',
    },
    categoryGambar:{
        borderWidth:0,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
    },
    categoryBtnTxt:{
        alignSelf:'center',
        marginTop:5,
        color:'#000000',
    },
    
})
