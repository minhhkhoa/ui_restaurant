import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { images, icons, fontSizes, colors } from '../constants'
import { ProductItem } from '../components'
import { Ionicons } from '@expo/vector-icons';
import {
    View, Text, StyleSheet,
    ScrollView, FlatList, Image,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { dataFoods, dataCategories, dataProducts } from '../data'
import { Back } from '../components'

function Product(props) {
    const [products, setProducts] = useState(dataProducts)
    const { navigation, router } = props

    //function of navigate to/back
    const { navigate, goBack } = navigation
    return (
        <View style={styles.container}>
            <Back
                nameScreen={'Products'}
                onPress={() => { goBack() }} />
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({ item }) => <ProductItem products={item} />}
                keyExtractor={(pro) => pro.productname}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 35
    }
})

export default Product