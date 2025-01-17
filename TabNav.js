import React from 'react'
import { Text, View, Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab=createBottomTabNavigator();
const tab= ()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login}/>
                <Tab.Screen name='Home' component={Home}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const Login= (props)=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>Login page</Text>
            
            <Button title='Go to home' onPress={()=>props.navigation.navigate("Home",{name,age})}></Button>
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