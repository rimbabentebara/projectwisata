import React from "react";
import {View, Image } from 'react-native';

const Menu = (props) => {
    return(
      <View style={{flex:1, alignItems:'center'}}>
      <Image source={props.img}/> 
      </View>
    )
  }

  export default Menu;