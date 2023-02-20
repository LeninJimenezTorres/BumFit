import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import {Picker} from '@react-native-picker/picker';

const Idealweight = () => {
    const [wrist, setwrist] = useState(1)
    const [height, setheight] = useState(1)
    const [risk, setrisk] = useState('undefined')
    const [complexion, setcomplexion] = useState('undefined')
    const [idealweight, setidealweight] = useState(1)
    const [genero, setgenero] = useState('undefined')

    const wristlist = []
    const heightlist = []
    const intervalswrist = 30;
    const intervalsHeight = 250;
    
    const wlist_women = 0;
    const imageBack = require('../Galery/Nude2.jpg');

    for (let i = 7; i < intervalswrist; i+=0.5) {
        wristlist.push(i)
    }
    for (let i = 50; i < intervalsHeight; i++) {
        heightlist.push(i)
    }
    useEffect(() => {
        let aux:any = (height/wrist).toFixed(2)
        if(genero=='masculino'){
            if(aux<9.6){
                setcomplexion('Grande');
            }
            if(aux>9.6 && aux<10.1){
                setcomplexion('Mediana');
            }
            if(aux>10.1){
                setcomplexion('Pequeña');
            }
        }
        if(genero=='femenino'){
            if(aux<9.9){
                setcomplexion('Grande');
            }
            if(aux>9.9 && aux<10.9){
                setcomplexion('Mediana');
            }
            if(aux>10.9){
                setcomplexion('Pequeña');
            }
        }
        console.log(complexion)
    })
      
    return (
        <View style={styles.screen}>
            <ImageBackground
                source={imageBack}
                resizeMode="cover"
                style={styles.imageIW}
                >
                <View style={styles.info}>
                    <Text style={styles.title}>PESO IDEAL</Text>
                    <Text style={styles.text}>El peso ideal es un aproximado de lo que deberías pesar acorde a tu estatura y complexión ósea.
                        La complexión se determina por medio de la circunferencia de tu muñeca, para ello utiliza una cinta métrica (o un hilo y extiéndelo sobre una regla)</Text>
                </View>
                <View style={styles.selecction}>
                    <Text style={styles.order}>Selecciona tus datos:</Text>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.textSelection}>Género</Text>
                        <Picker
                            selectedValue={genero}
                            onValueChange={(value, index) => 
                                {
                                    setgenero(value)
                                    console.log(value)
                                }
                            }
                            mode="dropdown" // Android only
                            style={styles.picker}
                        >
                            <Picker.Item label='seleccione' value="undefined"/>
                            <Picker.Item label='masculino' value="masculino"/>
                            <Picker.Item label='femenino' value="femenino"/>
                        </Picker>
                    </View>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.textSelection}>Circunferencia de la muñeca</Text>
                        <Picker
                            selectedValue={wrist}
                            onValueChange={(value, index) => 
                                {
                                    setwrist(value)
                                    console.log(value)
                                }
                            }
                            mode="dropdown" // Android only
                            style={styles.picker}
                        >
                            <Picker.Item label='seleccione' value={1}/>
                            {
                                wristlist.map((item,index)=>
                                    <Picker.Item key={index} label={item+' cm'} value={item}/>
                                )
                            }
                        </Picker>
                    </View>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.textSelection}>Estatura</Text>
                        <Picker
                            selectedValue={height}
                            onValueChange={(value, index) => 
                                {
                                    setheight(value)
                                    console.log(value)
                                }
                            }
                            mode="dropdown" // Android only
                            style={styles.picker}
                        >
                            <Picker.Item label='seleccione' value={1}/>
                            {
                                heightlist.map((item,index)=>
                                    <Picker.Item key={index} label={item+' cm'} value={item}/>
                                )
                            }
                        </Picker>
                    </View>
                </View>   
                <View style={styles.results}>
                    <Text style={styles.complexionResults}>Complexión: {complexion!='undefined'?complexion:''}</Text>
                    <Text style={styles.textResults}>Resultados: {risk!='undefined'?risk:''}</Text>
                </View>
            </ImageBackground>
        </View>
  )
}

export default Idealweight

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgb(0,0,0)',
    },
    info:{
        flex:0.35,
        justifyContent: "center",
        alignItems: "center",
        width:'100%',
    },
    selecction:{
        flex:0.35,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    results:{
        flex:0.3,
        justifyContent: "center",
        alignItems: "center",
        width:'100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    
    text: {
        width:'100%',
        color:'white',    
        height:'60%',
        padding:5,
        fontSize: 18,
        textAlign:'justify',
        textAlignVertical:'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    title: {
        color:'white',    
        width:'100%',
        height:'40%',
        fontSize: 35,
        textAlignVertical:'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        textAlign:'center',
    },  
    
    order: {
        color:'white',    
        height:'20%',
        width:'100%',
        fontSize: 18,
        textAlign:'center',
        textAlignVertical:'bottom',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingBottom:7,
    },
    
    pickerContainer:{
        width:'100%',
        height:'40%',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    picker: {
        marginVertical: '1%',
        width:'40%',
        padding: 1,
        marginHorizontal:11,
        borderWidth: 1,
        borderColor: "#666",
        backgroundColor: 'rgba(255,255,255,1)',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
    },
    textSelection: {
        width:'30%',
        color:'white',    
        fontSize: 18,
        textAlign:'center',
        textAlignVertical:'center',
        //backgroundColor:'rgb(255,0,0)',
    },
    
    complexionResults:{
        color:'white',
        fontSize: 18,
        flex:0.5,
        width:'100%',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        textAlignVertical:'center',
    },
    
    textResults:{
        color:'white',
        width:'100%',
        flex:0.5,
        fontSize: 18,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'top',
        backgroundColor: 'rgba(0,0,0,0.0)',
    },
    imageIW: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
});