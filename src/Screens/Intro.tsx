import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

//const imageBack = require('../Galery/cbum12.jpeg');
const imageBack = require('../Galery/cbum9.jpeg');

export const Intro = ({navigation}:any)=> { //{showIntro}:any
    //console.log(showIntro);
    return (
        <View style={styles.appcContainer} onTouchStart={ ()=>{navigation.navigate('Main')} }>
            <ImageBackground  source={imageBack} resizeMode="cover" style={styles.imageIntro}>
              <Text style={styles.texto}>
                  BumFit
              </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    appcContainer: {
      margin: 0,
      paddingHorizontal: 0,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'rgba(200,0,210,1)',
      width:'100%',
  },
  texto: {
      fontSize: 50,
      fontWeight: '600',
      backgroundColor: 'rgba(0,0,0,0.0)',
      width:'100%',
      height:'10%',
      textAlignVertical:'center',
      textAlign:'center',
      color:'white',
      textShadowColor: 'rgba(0,0,0,0.99)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    imageIntro: {
      width:'100%',
      flex: 1,
      justifyContent: 'center',
    },
  });
  
  