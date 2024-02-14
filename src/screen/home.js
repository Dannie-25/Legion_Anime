import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import DATA from '../data/data';
import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';


const Home = () => {
    const [data, setData] = useState(DATA)

    useEffect(() => {
        setData(DATA)
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.MasButtom} onPress={() => ('#')}>
                <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
    },

    chatContainer: {
        flexDirection: 'row',
        marginRight: 16,
        marginLeft: 16
    },

    image: {
        width: 50,
        height: 50,
        backgroundColor: '#128C7E',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    chatContent: {
        flex: 5,
        borderBottomWidth: 0,
        marginLeft: 16,
        paddingBottom: 22,
        marginBottom: 15,
    },

    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        MarginTop: 4
    },

    chatName: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    chatTime: {
        fontSize: 12,
        color: '#A0A09E'
    },

    messages: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    chatMessage: {
        fontSize: 14,
        color: '#A0A09E',
        width: '90%'
    },

    unreadContainer: {
        height: 20,
        width: 25,
        borderRadius: 20,
        backgroundColor: '#25D366',
        alignItems: 'center',
        justifyContent: 'center'
    },

    totalUnread: {
        fontSize: 10,
        color: '#fff',
        fontWeight: '600'
    },

    MasButtom: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: '#4c9df8',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});