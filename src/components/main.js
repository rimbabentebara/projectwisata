import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import Plus from "../components/molecules/Plus";
import Menu from "../components/molecules/Menu";
import Note from './note';


export default class Myapp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            noteArray: [],
            noteText: '',
        }
    }
    render(){
        let notes = this.state.noteArray.map((val, key) => {return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)}/>});
        return(
           
            <View style={styles.container}>
                <View style={styles.header}>
                   <Text style={styles.textHeader}>- To Do List -</Text>
                   <Image style={styles.menuBars} source={require('../assets/icon/menu.png')}  />
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput
                    onChangeText={(noteText) => this.setState({noteText})}
                    style={styles.textInput}
                    placeholder="ketik disini"
                    placeholderTextColor="white"/>
                </View>
                <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                <Image style={styles.addButtonText} source={require('../assets/icon/plus.png')}  />
                </TouchableOpacity>
             </View>
             
        );
    }
    
    addNote(){
        if(this.state.noteArray){
            var d = new Date();
            this.state.noteArray.push({
                'date' : d.getFullYear() +
                '/' + (d.getMonth() + 1) +
                '/' + d.getDate(),
                'note' : this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray})
            this.setState({noteText: ''})
        }
    }
    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray})
    }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        header:{
            backgroundColor: '#000080',
            justifyContent: 'center',
            borderBottomWidth: 2,
            borderBottomColor: '#ddd'
        },
        menuBars:{
            ndColor: '#000080',
            position:'absolute',
            marginLeft: '2%',
            width: 30,
            height: 35,
            
        },
        textHeader: {
            color: 'white',
            fontSize: 18,
            padding: 20,
            paddingBottom: 15,
            marginLeft: '10%',
        },
        
        scrollContainer: {
            flex: 1,
            marginBottom: 20,
            backgroundColor: '#DCDCDC',
        },
        footer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
        },
        textInput: {
            alignSelf: 'stretch',
            color: '#fff',
            padding: 30,
            backgroundColor: '#252525',
            borderTopWidth: 2,
            borderTopColor: '#ededed',       
        },
        addButton: {
            position: 'absolute',
            zIndex: 11,
            right: 10,
            top: 6,
            backgroundColor: '#000080',
            width: 50,
            height: 50,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
        },
        addButtonText:{
            color: 'white',
            fontSize: 24,
        }
    });
                