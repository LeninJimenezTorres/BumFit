import React from 'react';
import {FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
//import { FlatGrid } from 'react-native-super-grid';

const imageBack = require('../Galery/base.jpg');

export const Main = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        
        <ImageBackground
            source={imageBack}
            resizeMode="cover"
            style={styles.imageIntro}>
            <View style={styles.subContainer}>
                <View style={styles.logoContainer}>
                    {/* <Image 
                        source={imageBack} 
                        resizeMode="contain"
                        style={styles.imageLogo}
                    /> */}
                    <Text style={styles.textoLogo}>BumFit</Text>
                </View>
                <View style={styles.optionsContainer}
                    
                >
                    <FlatList
                        style={styles.sectionOptions}
                        data={[
                            {
                                'category':'Índice de Masa Corporal',
                                'image':require('../Galery/IMC2.jpg'),
                                'screen':'Imc',
                            },
                            {
                                'category':'Peso Ideal',
                                'image':require('../Galery/pesoIdeal.jpg'),
                                'screen':'Idealweight',
                            },
                            {
                                'category':'Calendario de entrenamiento',
                                'image':require('../Galery/workout4.jpg'),
                                'screen':'Workoutcalendly',
                            },
                            {
                                'category':'Dieta',
                                'image':require('../Galery/diet2.webp'),
                                'screen':'Diet',
                            },
                            {
                                'category':'Estadísticas',
                                'image':require('../Galery/statistics3.jpg'),
                                'screen':'Statistics',
                            },
                            {
                                'category':'Documentar progreso',
                                'image':require('../Galery/progress.jpg'),
                                'screen':'Documentation',
                            },
                        ]}
                        renderItem={({ item }) => (
                            <ImageBackground 
                            style={styles.options}
                            source={item.image}
                            resizeMode="cover"
                            >
                                <Text style={styles.textoOption} 
                                onPress={()=>{navigation.navigate(item.screen)}}
                                >
                                    {item.category}
                                </Text>
                            </ImageBackground>)
                        }
                        numColumns={2}
                        //keyExtractor={(item, index) => index}
                    />
                    
                    {/* <FlatList
                        style={styles.sectionOptions}
                        data={[
                            {key:'IMC'},
                            {key:'Ideal Peso'},
                            {key:'Workout Calendary'},
                            {key:'Diet'},
                        ]}
                        renderItem={({item})=><View style={styles.options}><Text>{item.key}</Text></View>}
                    /> */}
                </View>
            </View>
        </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        margin: 0,
        paddingHorizontal: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,210,1)',
        width: '100%',
    },
    subContainer: {
        margin: 0,
        paddingHorizontal: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,210,0)',
        width: '100%',
    },
    logoContainer: {
        margin: 0,
        paddingHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,1)',
        width: '100%',
        height:150,
        display: 'flex',
        flexDirection:'row',
    },
    optionsContainer: {
        margin: 0,
        paddingHorizontal: 0,
        display:'flex',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(80,120,110,0.1)',
        width: '100%',
        height:500,
        padding: '0%',
    },
    
    textoLogo: {
        fontSize: 30,
        fontWeight: '600',
        backgroundColor: 'rgba(0,100,0,0.0)',
        width: '100%',
        height: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.99)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        textDecorationLine: 'underline' ,
    },
    texto: {
        fontSize: 50,
        fontWeight: '600',
        backgroundColor: 'rgba(0,0,0,0.0)',
        width: '100%',
        height: '10%',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.99)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
    imageIntro: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    sectionOptions: {
        width: '100%',
        height:300,
        backgroundColor: 'rgba(0,0,0,0.2)',
        //padding:'8%',
        
        display:'flex',
        flex: 1,
        flexDirection: 'column',
    },
    options: {
        width: '100%',
        height: 250,
        margin:'2%',
        //marginTop:'1%',
        display:'flex',
        flex: 1,
        flexDirection: 'column',

        alignSelf:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(200,200,200,1)',
        textAlign: 'center',
    },
    textoOption: {
        fontSize: 20,
        fontWeight: '600',
        backgroundColor: 'rgba(0,0,0,0.15)',
        width: '100%',
        height: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.99)',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 5,
    },
    // imageLogo: {
    //     width: '20%',
    //     height: '20%',
    //     justifyContent: 'center',
    // },
});
