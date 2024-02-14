import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Home from './screen/home';
import Peliculas from './screen/peliculas';
import Series from './screen/series';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
            initalRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'white'
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold'
                },
                tabBarStyle: {
                    backgroundColor: '#4c9df8'
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
            />

            <Tab.Screen
                name='Peliculas'
                component={Peliculas}
            />

            <Tab.Screen
                name='Series'
                component={Series}
            />
        </Tab.Navigator>
    )
}

export default Navigation


const styles = StyleSheet.create({
    tabBarLabel: {
        display: 'none'
    }
});