import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput
                value={term}
                onChangeText={onTermChange}
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search'
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor:'#dadada',
        height: 50,
        borderRadius:5,
        marginTop:15,
        marginHorizontal:15,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyle: {
        flex:1,
        fontSize: 18,
    },
    iconStyle:{
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal:15,
    }
})

export default SearchBar