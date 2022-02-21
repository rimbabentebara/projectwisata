import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Card } from "react-native";
import Delete from "../components/molecules/Delete";


export default class Note extends React.Component{

    render(){
        let { cardText, card} = styles
        return(
            
            
            <View style= {cardText} >
                <Text  style={styles.noteTitle}>{this.props.val.note}</Text>
                <Text style= {styles.noteText}>{this.props.val.date}</Text>
                
                  <TouchableOpacity style={card} onPress={this.props.deleteMethod} style= {styles.noteDelete}>
                  <Image style={styles.noteDeleteText} source={require('../assets/icon/hapus.png')}  />
                
                  </TouchableOpacity>    
            </View>
            
        );
    }
    }

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            
           
        },
        cardText:{
            fontSize: 15,
            padding: 8,
            backgroundColor: '#fff',
            marginBottom: 10,
            marginLeft: '2%',
            width: '95%',
            borderRadius:5,
            elevation: 8,
            
        },
       
        
        note: {
            
            position: 'relative',
            padding: 20,
            PaddingRight: 100,
            borderBottomWidth: 2,
            borderBottomColor: '#ededed',
            
        },
        noteDelete: {
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            
            padding: 5,
            top: 5,
            bottom: 20,
            right: 5,
            
        },
        noteTitle: {
            fontSize:30,
            paddingLeft: 14,
            fontStyle:'arial'
            

        },
        noteText: {
            borderColor: 'white',
            right:0.01,
            backgroundColor: '#ffffff',
            paddingLeft: 15,
            borderLeftWidth: 7,
            borderLeftColor: '#E91E63',
            width: '86%',
            borderRadius:3,
            
            
            
        },
     
        noteDeleteText: {
            color: 'white',
        }
 
    });
                