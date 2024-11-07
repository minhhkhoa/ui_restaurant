import { StatusBar } from 'expo-status-bar'
import React, { useState,useEffect } from 'react'
import { images, icons, fontSizes, colors } from '../constants'
import { Fooditem } from '../components'
import { Ionicons } from '@expo/vector-icons';
import {
    View, Text, StyleSheet,
    ScrollView, FlatList, Image,
    TouchableOpacity,
    TextInput,Keyboard
} from 'react-native'
import { dataFoods, dataCategories } from '../data'
import { Back } from '../components'


function FoodList(props) {
    const {handleShow} = props;

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                handleShow(false);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                handleShow(true);

            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    //list of food = sttate
    const [foods, setFoods] = useState(dataFoods)

    const [categories, setCategories] = useState(dataCategories)

    const [searchText, setSearchText] = useState('')

    // const filteredFoods = () => foods.filter((eachfood) =>
    //         eachfood.name.toLowerCase().includes(searchText.toLowerCase()))
    const filteredFoods = foods.filter((eachfood) =>
        eachfood.name.toLowerCase().includes(searchText.toLowerCase())
        //Nếu không nhập gì thì searchText là chuỗi rỗng
        // Trong JavaScript, bất kỳ chuỗi nào cũng sẽ chứa chuỗi rỗng.
        //==>điều kiện lọc filter luôn đúng ==> luôn in all
    );

    const { navigation, router } = props

    //function of navigate to/back
    const { navigate, goBack } = navigation
    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor='darkgray' /> */}
            <Back
                        nameScreen={'Foods'}
                        onPress={() => { goBack() }} />

            <View style={{ }}>
                <View style={{
                    height: 80,
                    justifyContent: 'space-around', alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <Ionicons name={'search-outline'} size={20} style={{ position: 'absolute', left: 15 }} />
                    <TextInput
                        style={{
                            backgroundColor: 'rgba(103, 103, 103,0.3)', width: '80%',
                            height: '60%', borderRadius: 10,
                            fontSize: fontSizes.h4,
                            // textAlign:'center'
                            paddingStart: 40
                        }}
                        onChangeText={(text) => setSearchText(text)}
                    />
                    <Ionicons name={'menu-outline'} size={40} />
                </View>

                <View style={styles.HoriList}>
                    <View style={{
                        width: '100%',
                        height: 1, backgroundColor: 'black'
                    }}>
                    </View>

                    <FlatList style={{ flex: 1 }}
                        data={categories}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return <TouchableOpacity
                                onPress={() => {
                                    alert('You press: ' + `${item.name}`)
                                }}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Image style={styles.img} source={{
                                    uri: item.url
                                }} />
                                <Text style={{ fontSize: fontSizes.h6 }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        }}
                    >

                    </FlatList>

                    <View style={{
                        width: '100%',
                        height: 1, backgroundColor: 'black'
                    }}></View>
                </View>
            </View>


            {/* <ScrollView>
                {foods.map((eachfood) => (
                    <Fooditem
                       key ={eachfood.name}
                       food={eachfood}
                    />
                ))}
            </ScrollView> */}


            {filteredFoods.length > 0 ? <FlatList
                data={filteredFoods}
                renderItem={({ item }) => <Fooditem
                    Press={() => {
                        alert('you press ' + `${item.name}`)
                    }}
                    food={item} />}
                keyExtractor={eachfood => eachfood.name}

            /> :
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: fontSizes.h2 }}>
                        Not food found.
                    </Text>
                </View>
            }
        </View>
        // Mỗi lần FlatList lặp qua một phần tử trong mảng foods,
        //  nó sẽ truyền phần tử đó vào hàm renderItem dưới dạng ĐỐI TƯỢNG item.
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    HoriList: {
        height: 100,
        // marginTop:35
        // backgroundColor: 'aqua'
    },
    img: {
        width: 55,
        height: 55,
        borderRadius: 30,
        marginHorizontal: 8
    },
})

export default FoodList