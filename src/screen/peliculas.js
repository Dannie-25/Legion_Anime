import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import DATAP from '../data/dataPeliculas';

const Peliculas = () => {
    const [dataPeliculas, setDataPeliculas] = useState(DATAP)

    useEffect(() => {
        setDataPeliculas(DATAP)
    })

    return (
        <View style={styles.container}>

            <FlatList
                data={dataPeliculas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.pContainer}>
                        <Image source={item.photos} style={styles.image} />
                        <View style={styles.Content}>
                            <View style={styles.Header}>
                                <Text style={styles.Name}>{item.name}</Text>
                            </View>
                            <Text style={styles.Time}>{item.time}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default Peliculas


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
    },
    pContainer: {
        flexDirection: 'row',
        marginRight: 16,
        marginLeft: 16
    },

    image: {
        width: 100,
        height: 200,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },

    Content:{
        flex:2,
        borderBottomWidth: 0,
        marginLeft: 15,
        paddingBottom: 15,
        marginBottom: 10,
        marginTop: 16,
    },

    Header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 5,
        marginTop:0
    },

    Name:{
        fontSize: 16,
        fontWeight: 'bold'
    }, 

    Time:{
        fontSize:12,
        color: '#A0A09E'
    }, 

    description:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});