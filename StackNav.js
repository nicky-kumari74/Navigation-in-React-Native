import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View ,StyleSheet, Text, Button, TextInput} from 'react-native';
const Stack= createNativeStackNavigator();
const stack= ()=>{
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerStyle:{backgroundColor:'pink'},
                headerTintColor:'white',
                headerTitleStyle:{fontSize:20}
                }}>
                <Stack.Screen name='Login' component={Login} options={{headerTitle:'User Login', headerRight:()=><Button title='right'></Button>}}/> 
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Login= (props)=>{
    const [name,setname]=useState("");
    const age=23;
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>Login page</Text>
            <TextInput placeholder='Enter name' style={{fontSize:20,borderWidth:2,borderColor:'green'}} onChangeText={(text)=>setname(text)}/>
            <Button title='Go to home' onPress={()=>props.navigation.navigate("Home",{name,age})}></Button>
        </View>
    )
}
const Home = (props)=>{
    const {name,age}=props.route.params;
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>Home page</Text>
            <Text style={{fontSize:25}}>Name :- {name}</Text>
            <Text style={{fontSize:25}}>Age :- {age}</Text>
        </View>
    )
}
export default stack;