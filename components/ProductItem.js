import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors, fontSizes } from '../constants'
import {
    View, Text, Image, StyleSheet, TouchableOpacity, Linking
} from 'react-native'
import { Rating } from 'react-native-elements';


function ProductItem(props) {
    const [heart, setHeart] = useState(false)
    let { url, price, productname, specifications, reviews, starts } = props.products
    return (
        <View style={styles.card}>
            {/* Header:img+price */}
            <View style={styles.Header}>
                <Image source={{ uri: url }} style={{ height: 110, width: 110, borderRadius: 10, resizeMode: 'cover' }} />
                <Text style={{ position: 'absolute', top: 7, right: 8, fontSize: fontSizes.h3, fontWeight: 600 }}>{price}$</Text>
            </View>
            {/* Body: nameproduct ,specifications  */}
            <TouchableOpacity
                style={styles.Body}
                onPress={()=>{
                    alert(`You press ${productname}`)
                }}
            >
                <View>
                    <Text style={{ fontSize: fontSizes.h5, fontWeight: 800, color: 'rgb(231, 64, 50)' }}>{productname}</Text>
                    {specifications.map((item, index) => <Text style={{ fontSize: fontSizes.h6 }} key={index}>⇨{item}</Text>)}
                </View>
            </TouchableOpacity>
            {/* Footer: starts, review , Tym*/}
            <View style={styles.Footer}>
                <View >
                    <TouchableOpacity onPress={() => setHeart(!heart)} style={{ flexDirection: 'row' }}>
                        <Ionicons name={heart ? 'heart' : 'heart-outline'} size={30} color={heart ? 'red' : null} />
                        <Text style={{ width: 50, fontSize: 12, color: heart ? 'red' : null }}>Saved for later</Text>
                    </TouchableOpacity>
                    {/* heart ? 'heart' : 'heart-outline' */}
                </View>

                <View style={{}}>
                    {/* tải dùng thư viện */}
                    <Rating
                        imageSize={16}
                        startingValue={starts}
                        readonly
                        tintColor='#F2F2F2'
                    // fractions={1}
                    />
                    <Text style={{ color: 'green' }}>{reviews} reviews</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 300,
        borderWidth: 1,
        // width:"50%",
        // backgroundColor: 'red',
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 20
    },
    Header: {
        flex: 3,
        // backgroundColor: 'aqua',
        justifyContent: 'center'
    },
    Body: {
        flex: 3.3,
        // backgroundColor: 'gray'
    },
    Footer: {
        flex: 1.2,
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})

export default ProductItem