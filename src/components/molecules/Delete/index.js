import React from "react";
import {View, Image } from 'react-native';

const Delete = (props) => {
    return(
      <View style={{flex:1, alignItems:'center'}}>
      <Image source={props.img}/> 
      </View>
    )
  }

  export default Delete;