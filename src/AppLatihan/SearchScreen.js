import React, {useState} from 'react'
import { StyleSheet,TextInput, Text, View, Animated,TouchableHighlight,TouchableOpacity,StatusBar,Image } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Notifications from './Search';
import serc from './../assets/icon/serc.png'
import back from './../assets/icon/left-arrow.png';

const SearchScreen = ({navigation}) => {
    const [listData, setListData] = useState(
        Notifications.map((NotificationItem, index) => ({
            key: `${index}`,
            title: NotificationItem.title,
            details: NotificationItem.details,
        })),
    );

    const closeRow = (rowMap, rowKey) => {
        if(rowMap[rowKey]){
            rowMap[rowKey].closeRow();
        }
    }

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    }

    const VisibleItem = props => {
        const {data} = props;
        return(
            <View>
                <View style={styles.rowFront}>
            <TouchableHighlight style={styles.rowFrontVisible}>
                <View>
                    <Text style={styles.title} numberOfLines={1}>{data.item.title}</Text>
                    <Text style={styles.details} numberOfLines={1}>{data.item.details}</Text>
                </View>
            </TouchableHighlight>
            </View>
            </View>
        )
    }

    const renderItem = (data,rowMap) => {
        return(
            <VisibleItem data={data}/>
        )
    };

    const HiddenItemWithActions = props => {
        const {swipeAnimatedValue,onClose, onDelete} = props;

        return(
            <View style={styles.rowBack}>
                <Text>Left</Text>
                <TouchableOpacity onPress={onClose} style={[styles.backRightBtn,styles.backRightBtnLeft]}>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete} style={[styles.backRightBtn,styles.backRightBtnRight]}>
                   <Animated.View style={[styles.trash, {
                       transform:[
                           {
                               scale: swipeAnimatedValue.interpolate({
                                   inputRange: [-90, -45],
                                   outputRange:[1,0],
                                   extrapolate: 'clamp',
                               }),
                           },
                       ],
                   }]}>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        );
    }

    const renderHiddenItem = (data, rowMap) => {
        return(
            <HiddenItemWithActions
            data={data}
            rowMap={rowMap}
            onClose={() => closeRow(rowMap, data.item.key)}
            onDelete={() => deleteRow(rowMap, data.item.key)}
            />
        )
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{borderWidth:0,left:15,
            top:10,
        width:40,
        height:40,
        backgroundColor: '#FFFFFF',
        borderRadius:50,}}>
        <Image source={back} style={{width:40,height:30}}/>
        </TouchableOpacity>
            <View style={{justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'}}>
            <View style={{justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'}}>
                 <View style={styles.textSerc}>
                <TouchableOpacity style={{justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center'}}>
                    <Image source={serc} style={{width:25,
        height:25,
        left:5}}/>
                <TextInput
                style={styles.textInput}
                placeholder='Cari Wisata'/>
                </TouchableOpacity>
                </View>
                </View>
                </View>
            <SwipeListView
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-150}
            disableRightSwipe
            />
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f4f4f4',
        flex:1,
    },
    backTextWhite:{
        color:'#fff',
    },
    rowFront:{
        backgroundColor:'#fff',
        borderRadius: 5,
        height:60,
        margin:5,
        marginBottom:15,
        shadowColor:'#999',
        shadowColor:'#999',
        shadowOpacity: 0.8,
        shadowOffset: {width:0,height:1},
        shadowRadius:2,
        elevation:5,
    },
    rowFrontVisible:{
        backgroundColor:'#fff',
        borderRadius:5,
        height:60,
        padding:10,
        marginBottom:15,
    },
    rowBack:{
        alignItems:'center',
        backgroundColor:'#ddd',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        margin:5,
        marginBottom:15,
        borderRadius:5,
    },
    backRightBtn:{
        alignItems:'flex-end',
        bottom:0,
        justifyContent:'center',
        position:'absolute',
        top:0,
        width:75,
        paddingRight:17,
    },
    backRightBtnLeft:{
        backgroundColor:'#fdeae7',
        right:75,
    },
    backRightBtnRight:{
        backgroundColor:'#fdeae7',
        right: 0,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
    },
    trash:{
        height:30,
        width:30,
        marginRight:7,
    },
    title:{
        fontSize:14,
        fontWeight:'bold',
        marginBottom:5,
        color:'#666',
    },
    details:{
        fontSize:12,
        color:'#999',
    },
})
