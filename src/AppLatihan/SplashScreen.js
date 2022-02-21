import React,{Component} from 'react'
import { View, Text, Image } from 'react-native'
import logo1 from './../assets/icon/logonama.png'
import logo2 from './../assets/icon/logobig.png'
import logo3 from './../assets/image/logobeltim.jpeg'
import logo4 from './../assets/image/logogeopark.png'
import {StackActions} from '@react-navigation/native';


class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Main'));
        },3500 );
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#EBF5FF'}}>
                <View style={{alignItems:'center',justifyContent:'center',top:140}}>
                    <Image source={logo2} style={{width:100,height:120}}/>
                    <Image source={logo1} style={{width:190,height:70,top:15}}/>
                    <Text style={{color:'#000000',top:150}}>Didukung Oleh</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',top:300}}>
                    <Image source={logo3} style={{width:50,height:50,left:45}}/>
                    <Image source={logo4} style={{width:50,height:50,right:45}}/>
                </View>
            </View>
        )
    }
}

export default SplashScreen
