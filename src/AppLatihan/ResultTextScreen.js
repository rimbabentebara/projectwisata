import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import back from './../assets/icon/left-arrow.png';
import fav3 from './../assets/image/fav3.jpg'
import fav4 from './../assets/image/fav4.jpg'

const ResultTextScreen = ({navigation}) => {
    return (
        <View >
            <View style={{flexDirection:'row',alignItems:'center',top:15,left:15}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={back} style={{width:30,height:30}}/>
                </TouchableOpacity>
            <Text style={{fontWeight:'bold',color:'#000000',fontSize:20,left:10}}>Result text</Text>
            </View>

            <View style={{ top:35,
                      borderTopColor:'#dddddd',
                      width:400,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:40}}/>
            <Item/>
          </View>
    )
}

export default ResultTextScreen

const styles = StyleSheet.create({})


const Item =() => {
    return(
        <View>
            <TouchableOpacity >
                    <View style={{flexDirection:'row',alignItems:'flex-start',left:20,top:15}}>
                          <Image source={fav3} style={{width:65,height:65,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>Open Pit Kik Karak</Text>
                          <Text style={{top:1,fontSize:13,color:'#a3a3a3'}}>Wisata Alam</Text>
                          <Text style={{top:5,fontSize:13,fontWeight:'600'}}>Blitung Timur...</Text>
                          </View>
                      </View>
                      </TouchableOpacity>
              <View style={{ top:35,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:40}}/>

                <TouchableOpacity >
                    <View style={{flexDirection:'row',alignItems:'flex-start',left:20,top:15}}>
                          <Image source={fav4} style={{width:65,height:65,borderRadius:10}}/>
                          <View style={{left:10}}>
                          <Text style={{fontSize:17,fontWeight:'bold',color:'#000000'}}>Pantai Tanjung Tinggi</Text>
                          <Text style={{top:1,fontSize:13,color:'#a3a3a3'}}>Wisata Air</Text>
                          <Text style={{top:5,fontSize:13,fontWeight:'600'}}>kabupaten Belitung, kecamatan Sijuk..</Text>
                          </View>
                      </View>
                      </TouchableOpacity>
              <View style={{ top:35,
                      borderTopColor:'#dddddd',
                      left:20,
                      right:20,
                      width:315,
                      borderTopWidth:2,
                      flexDirection:'row',
                      height:40}}/>
        </View>
    )
}
