import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Intro} from './src/Screens/Intro'
import { Main } from './src/Screens/Main'
import { Imc } from './src/Screens/Imc'
import Idealweight from './src/Screens/Idealweight'
import Workoutcalendly from './src/Screens/Workoutcalendly'
import Diet from './src/Screens/Diet'
import Statistics from './src/Screens/Statistics'
import Documentation from './src/Screens/Documentation'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    const [introscreen, setIntroscreen] = useState(true)

    const showIntro = (datohijo:any) =>{
        setIntroscreen(datohijo)
    }

    return (
        <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Intro"
                        component= {Intro}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Main"
                        component= {Main}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Imc"
                        component= {Imc}
                    />
                    <Stack.Screen
                        name="Idealweight"
                        component= {Idealweight}
                    />
                    <Stack.Screen
                        name="Workoutcalendly"
                        component= {Workoutcalendly}
                    />
                    <Stack.Screen
                        name="Diet"
                        component= {Diet}
                    />
                    <Stack.Screen
                        name="Statistics"
                        component= {Statistics}
                    />
                    <Stack.Screen
                        name="Documentation"
                        component= {Documentation}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            
    )
}

export default App

const styles = StyleSheet.create({
    appcContainer: {
        margin: 0,
        paddingHorizontal: 0,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(200,0,0,1)',
        width:'100%',
        height:'100%',
    },
});

