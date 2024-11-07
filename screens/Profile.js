import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { images, icons, fontSizes, colors } from '../constants'
import { Fooditem } from '../components'
import { Ionicons } from '@expo/vector-icons';
import {
    View, Text, StyleSheet,
    ScrollView, FlatList, Image,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { dataFoods, dataCategories } from '../data'
import {
    user as UserRepository,
    population as Population
} from '../repositories'
import { convertDateTimetoString } from '../utilies/DateTime';
import { Back } from '../components'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 2, // số chữ số thập phân
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // màu sắc của đường biểu đồ
    style: {
        borderRadius: 16 // bo góc cho biểu đồ
    }
};

function Profile(props) {
    const [user, setUser] = useState({})
    const [populations, setPopulations] = useState([])
    // console.log(UserRepository.getUserDetail())
    //call when component loaded
    useEffect(() => {
        UserRepository.getUserDetail()
            .then((responeUser) => setUser(responeUser))

        Population.getPopulation({
            drilldowns: 'Nation',
            measures: 'Population'
        }).then(responePopulations => {
            setPopulations(responePopulations);
            // Kiểm tra dữ liệu trả về
        })

    }, [])//mảng phụ thuộc chạy 1 lần
    // UserRepository.getUserDetail()
    const { email, dateOfBirth, gender,
        userId, address, username, url, phone, registeredDate } = user

    const { navigation, router } = props

    //function of navigate to/back
    const { navigate, goBack } = navigation

    return (
        <ScrollView>
            <Back
                nameScreen={'Profile'}
                onPress={() => { goBack() }} />
            <View style={styles.container}>
                <View style={styles.Header} />
                <Image source={{ uri: url }} style={{ height: 110, width: 110, borderRadius: 80, resizeMode: 'cover' }} />

                <View style={{ flexDirection: 'row', paddingStart: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
                        username:
                    </Text>
                    <Text>{username}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingStart: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>Email:</Text>
                    <Text>{email}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingStart: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
                        DayOfBirth:
                    </Text>
                    <Text>{convertDateTimetoString(dateOfBirth)}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingStart: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
                        gender:
                    </Text>
                    <Text>{gender}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingStart: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
                        userId:
                    </Text>
                    <Text>{userId}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingStart: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
                        address:
                    </Text>
                    <Text>{address}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingStart: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
                        phone:
                    </Text>
                    <Text>{phone}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingStart: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: fontSizes.h5 }}>
                        registeredDate:
                    </Text>
                    <Text>{registeredDate}</Text>
                </View>

                <View style={{ marginTop: 50 }}>
                    <Text>
                        {populations.length > 0 && (
                            <LineChart
                                data={{
                                    labels: populations.filter(item => parseInt(item.year) > 2016).map(item => item.year),
                                    datasets: [
                                        {
                                            data: populations.filter(item => parseInt(item.year) > 2016).map(item => item.population),
                                            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                                            strokeWidth: 2
                                        }
                                    ],
                                    legend: ["Population/Year"]
                                }}
                                width={screenWidth}
                                height={220}
                                chartConfig={chartConfig}
                            />
                        )}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        marginTop: 10,
    }
})

export default Profile