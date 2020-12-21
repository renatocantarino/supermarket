import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import AppList from '../forms/AppList';
import AppForm from '../forms/AppForm';

const { Navigator, Screen } = createBottomTabNavigator();
export default function AppTab() {

    return (
        <NavigationContainer>
            <Navigator tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                labelStyle: {
                    fontSize: 13,
                    marginLeft: 16
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}>
                <Screen name="AppList" component={AppList} options={{ tabBarLabel: "Compras" }} />
                <Screen name="AppForm" component={AppForm} options={{ tabBarLabel: "Adicionar" }} />
            </Navigator>
        </NavigationContainer>

    )
}
