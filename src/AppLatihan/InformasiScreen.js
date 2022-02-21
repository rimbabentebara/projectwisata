import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
import info1 from './../assets/image/info1.jpg';
import info2 from './../assets/image/info2.jpeg';
import info3 from './../assets/image/info3.jpg';
import info from './../assets/image/dtinfo1.jpg';


const Informasi = ({navigation}) => {
    return (
        <ScrollView>
        <View >
            <View style={{flexDirection:'row',alignItems:'center',top:15,left:15}}>
            <Text style={{fontWeight:'bold',color:'#000000',fontSize:20}}>Informasi dan Berita</Text>
            </View>

            <View style={{ marginTop:35,
                      borderTopColor:'#dddddd',
                      width:400,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("DetailInformasiScreen")}>
                    <View style={{flexDirection:'row',alignItems:'flex-start',left:20,top:15,}}>
                          <Image source={info} style={{width:80,height:80,borderRadius:10}}/>
                          <View style={{left:10,}}>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>SMP Negeri 4 Manggar</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000',right:5}}> Terima Bibit Buah</Text>
                          <Text style={{top:5}}>20 Oktober 2021</Text>
                          </View>
                      </View>
                      </TouchableOpacity>
                      </View>
                      

                      <View style={{ marginTop:20,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}>

                          <TouchableOpacity onPress={() => navigation.navigate("DetailInformasiScreen1")}>
                      <View style={{flexDirection:'row',alignItems:'flex-start',top:15}}>
                          <Image source={info2} style={{width:80,height:80,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>Wabup Beltim Apresiasi Job</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>FairBeltim</Text>

                          <Text style={{top:5}}>03 November 2021</Text>
                          </View>
                      </View>
                      </TouchableOpacity>
                      </View>

                      <View style={{ marginTop:20,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}>

                          <TouchableOpacity onPress={() => navigation.navigate("DetailInformasiScreen2")}>
                      <View style={{flexDirection:'row',alignItems:'flex-start',top:15}}>
                          <Image source={info3} style={{width:80,height:80,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:16,fontWeight:'bold',color:'#000000'}}>LKPM Buat Proyek Pemerintah</Text>
                          <Text style={{fontSize:16,fontWeight:'bold',color:'#000000'}}>Jadi Lebih Terpantau</Text>

                          <Text style={{top:5}}>09 November 2021</Text>
                          </View>
                      </View>
                      </TouchableOpacity>
                      </View>

                      <View style={{ marginTop:20,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}>

                          <TouchableOpacity onPress={() => navigation.navigate("DetailInformasiScreen3")}>
                      <View style={{flexDirection:'row',alignItems:'flex-start',top:15}}>
                          <Image source={info1} style={{width:80,height:80,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>Adakan Kerjurkab Tinju 2022</Text>
                          <Text style={{top:5}}>03 November 2021</Text>
                          </View>
                      </View>
                      </TouchableOpacity>
                      </View>

                      <View style={{ marginTop:20,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}>

                          <TouchableOpacity onPress={() => navigation.navigate("DetailInformasiScreen1")}>
                      <View style={{flexDirection:'row',alignItems:'flex-start',top:15}}>
                          <Image source={info2} style={{width:80,height:80,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>Wabup Beltim Apresiasi Job</Text>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>FairBeltim</Text>

                          <Text style={{top:5}}>03 November 2021</Text>
                          </View>
                      </View>
                      </TouchableOpacity>
                      </View>


                    <View style={{ marginTop:20,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}>

                          <TouchableOpacity onPress={() => navigation.navigate("DetailInformasiScreen2")}>
                      <View style={{flexDirection:'row',alignItems:'flex-start',top:15}}>
                          <Image source={info3} style={{width:80,height:80,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:16,fontWeight:'bold',color:'#000000'}}>LKPM Buat Proyek Pemerintah</Text>
                          <Text style={{fontSize:16,fontWeight:'bold',color:'#000000'}}>Jadi Lebih Terpantau</Text>

                          <Text style={{top:5}}>8 Oktober 2021</Text>
                          </View>
                      </View>
                      </TouchableOpacity>
                      </View>

                      <View style={{ marginTop:20,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:100,}}/>



                </View>
                </ScrollView>

                      
        
    )
}

export default Informasi

const styles = StyleSheet.create({})
