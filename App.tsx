import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Intro} from './src/Screens/Intro'
import { Main } from './src/Screens/Main'

const App = () => {
    const [introscreen, setIntroscreen] = useState(true)

    const showIntro = (datohijo:any) =>{
        setIntroscreen(datohijo)
    }

    return (
        <View style={styles.appcContainer}>
            {
                introscreen?
                <Intro showIntro={showIntro}/>
                :
                <Main data={introscreen}/>
            }
        </View>
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

