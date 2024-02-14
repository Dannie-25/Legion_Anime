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
            <Text style={styles.title}>Recientemente Agregados</Text>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.pContainer}>
                        <Image source={item.photos} style={styles.image}  />
                        <View style={styles.Content}>
                            <Text style={styles.Name}>{item.name}</Text>
                        </View>
                    </View>
                )}
                numColumns={3}
                key={3}
            />

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
    },
    title: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    pContainer: {
        marginRight: 10,
        marginLeft: 10,
    },

    image: {
        width: 100,
        height: 200,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    Content: {
        flexDirection: 'row', 
        flex:2,
        borderBottomWidth: 0,
        marginLeft: 15,
        paddingBottom: 15,
        marginBottom: 10,
        marginTop: 16,
        width: 100,
    },

    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 0
    },

    Name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});