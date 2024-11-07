import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FoodList, Product, Setting, Profile, Chat } from '../screens';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

const Options = (route, show) => ({
    headerShown: false,
    tabBarActiveTintColor: 'red',
    tabBarStyle: {
        backgroundColor: '#E5E5E5', // Màu nền của tabBar
        display: show ? 'flex' : 'none',
    },
    tabBarIcon: ({ focused, color, size }) => {
        let screenName = route.name;
        let iconName =
            screenName === 'Product' ? 'cart-outline' :
                (screenName === 'FoodList' ? 'fast-food-outline' :
                    (screenName === 'Setting' ? 'settings-outline' :
                        (screenName === 'Profile' ? 'person-outline' :
                            (screenName === 'Chat' ? 'chatbubbles-outline' : ''))));

        return <Ionicons
            name={iconName}
            size={30}
            color={focused ? 'red' : 'black'}
        />;
    }
});

function UItab(props) {
    const [show, setShow] = useState(true);
    const handleShow = (value) => setShow(value);

    return (
        <Tab.Navigator screenOptions={({ route }) => Options(route, show)}>
            <Tab.Screen name={'Product'} component={Product} options={{ tabBarLabel: 'Products' }} />
            <Tab.Screen name="FoodList">
                {props => <FoodList {...props} handleShow={handleShow} />}
            </Tab.Screen>
            <Tab.Screen name={'Chat'} component={Chat} />
            <Tab.Screen name={'Profile'} component={Profile} options={{ tabBarLabel: 'Profile' }} />
            <Tab.Screen name={'Setting'} component={Setting} options={{ tabBarLabel: 'Settings' }} />
        </Tab.Navigator>
    );
}

export default UItab;
