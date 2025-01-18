import React from 'react'
import { Text, View, Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab=createBottomTabNavigator();
const tab= ()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: 'orange',
                tabBarLabelStyle: {
                  fontSize: 18,
                  paddingBottom: 5,
                },
              }}>
                <Tab.Screen name='Home' component={Home}
                options={{
                  tabBarIcon:({focused})=>(
                    <Ionicons name='home' size={28} color={focused? 'orange' : 'black'}/>
                  )
                }}
                />
                <Tab.Screen name='Setting' component={Setting}
                options={{
                  tabBarIcon:({focused})=>(
                    <Ionicons name='settings' size={28} color={focused? 'orange' : 'black'}/>
                  )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const Setting= (props)=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>Setting page</Text>
        </View>
    )
}
const Home = ()=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>Home page</Text>
        </View>
    )
}
export default tab;