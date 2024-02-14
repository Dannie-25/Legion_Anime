import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { Fontisto, MaterialCommunityIcons, AntDesign  } from 'react-native-vector-icons';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log(`Buscando: ${searchTerm}`);

        Keyboard.dismiss();
        setIsSearchOpen(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Legión Anime</Text>
                <View style={styles.iconContainer}>
                    {isSearchOpen ? (
                        <TextInput
                            style={styles.input}
                            onChangeText={setSearchTerm}
                            value={searchTerm}
                            placeholder="Buscar"
                            onSubmitEditing={handleSearch}
                            onBlur={handleSearch}
                        />
                    ) : (
                        <TouchableOpacity style={styles.MasButtom} onPress={() => setIsSearchOpen(true)}>
                            <Fontisto name="search" size={20} color="white" style={styles.icon} />
                        </TouchableOpacity>
                    )}
                    <MaterialCommunityIcons name='dots-vertical' size={24} color='white' style={styles.icon} />
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4c9df8',
        paddingTop: 40,
        paddingBottom: 8,
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },

    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '800'
    },

    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    icon: {
        marginLeft: 20
    },

    input: {
        width: 100,
        height: 30,
        borderWidth: 0,
        marginRight: 10,
    },
});
