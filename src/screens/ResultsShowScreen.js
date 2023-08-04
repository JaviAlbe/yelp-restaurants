import React, {useEffect, useState} from "react";
import {View, Image, Text, StyleSheet, FlatList} from "react-native";
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] =  useState(null)

    //Instead of through props, the id is passed using the navigation library and extracted here to show
    //the correct selected restaurant
    const id = navigation.getParam('id')

    //Call to the Yelp API to get the info from the correct restaurant
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    //don't render anything until results is no longer null
    if(!result) {
        return(
            <View>
                <Text>Trying to fetch restaurant information...</Text>
            </View>
        )
    }

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return(
                        <Image style={styles.image} source={{uri: item}} />
                    )
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 220,
        width: 300,
    }
})

export default ResultsShowScreen