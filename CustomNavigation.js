import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/AppLatihan/HomeScreen';
import FavoritDestinasiScreen from './src/AppLatihan/FavoritDestinasiScreen';
import Destinasi from './src/AppLatihan/DestinasiScreen';
import DetailDestinasiScreen from './src/AppLatihan/DetailDestinasiScreen';
import Informasi from './src/AppLatihan/InformasiScreen';
import DetailInformasiScreen from './src/AppLatihan/DetailInformasiScreen';
import Lainnya from './src/AppLatihan/LainnyaScreen';
import TentangScreen from './src/AppLatihan/TentangScreen';


const Stack = createNativeStackNavigator();

const OneScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="HomeScreen"
            Component={HomeScreen}/>
            <Stack.Screen
            name="FavoritDestinasiScreen"
            Component={FavoritDestinasiScreen}/>
        </Stack.Navigator>
    )
}

export {OneScreenNavigator}

