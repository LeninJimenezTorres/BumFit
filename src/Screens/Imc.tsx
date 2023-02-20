import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import {Picker} from '@react-native-picker/picker';

export const Imc = () => {
    const [weight, setweight] = useState(1)
    const [height, setheight] = useState(1)
    const [imc, setimc] = useState(1)
    const [risk, setrisk] = useState('undefined')
    
    const weightlist = []
    const heightlist = []
    const intervalsWeight = 400;
    const intervalsHeight = 250;
    
    const imageBack = require('../Galery/imcBack.jpg');

    for (let i = 20; i < intervalsWeight; i+=0.5) {
        weightlist.push(i)
    }
    for (let i = 50; i < intervalsHeight; i++) {
        heightlist.push(i)
    }
    useEffect(() => {
        let aux:any = (weight/((height*0.01)*(height*0.01))).toFixed(2)
        if(weight!=1 && height!=1){
            setimc(aux)
        }
        console.log(imc)
        if(imc>=18.5 && imc<=24.9){
            setrisk('Normal')
        }
        if(imc>=25 && imc<=29.9){
            setrisk('Sobrepeso')
        }
        if(imc>=30 && imc<=34.9){
            setrisk('Obesidad Grado I')
        }
        if(imc>=35 && imc<=39.9){
            setrisk('Obesidad Grado II')
        }
        if(imc>=40){
            setrisk('Obesidad Grado III')
        }
    })
    return (
        <View style={styles.screen}>
            <ImageBackground
                source={imageBack}
                resizeMode="cover"
                style={styles.imageImc}
                >
                <View style={styles.info}>
                    <Text style={styles.title}>IMC</Text>
                    <Text style={styles.subtitle}>Índice de Masa Corporal</Text>
                    <Text style={styles.text}>El IMC es un factor predictivo que nos ayuda a saber si tu peso es correcto, insuficiente o el grado de obesidad</Text>
                </View>
                <View style={styles.selecction}>
                    <Text style={styles.order}>Selecciona tus datos:</Text>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.textSelection}>Peso</Text>
                        <Picker
                            selectedValue={weight}
                            onValueChange={(value, index) => 
                                {
                                    setweight(value)
                                    console.log(value)
                                }
                            }
                            mode="dropdown" // Android only
                            style={styles.picker}
                        >
                            {
                                weightlist.map((item,index)=>
                                    <Picker.Item key={index} label={item+' kg'} value={item}/>
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
                            {
                                heightlist.map((item,index)=>
                                    <Picker.Item key={index} label={item+' cm'} value={item}/>
                                )
                            }
                        </Picker>
                    </View>
                </View>   
                <View style={styles.results}>
                    <Text style={styles.textRsults}>IMC: {imc}</Text>
                    <View style={
                        risk=='Normal'?
                        styles.colorResults_normal:
                        risk=='Sobrepeso'?
                        styles.colorResults_overweight:
                        risk=='Obesidad Grado I'?
                        styles.colorResults_o1:
                        risk=='Obesidad Grado II'?
                        styles.colorResults_o2:
                        risk=='Obesidad Grado III'?
                        styles.colorResults_o3:
                        styles.colorResults
                        } id='results'>
                        <Text style={{color:'white',fontSize:18}}>Resultados: {risk!='undefined'?risk:''}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgb(0,0,0)',
    },
    info:{
        flex:0.3,
        justifyContent: "center",
        alignItems: "center",
        width:'100%',
      },
      selecction:{
        flex:0.4,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    results:{
        flex:0.3,
        justifyContent: "center",
        alignItems: "center",
        width:'100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
      },
      
      text: {
        width:'100%',
        color:'white',    
        height:'40%',
        padding:5,
        fontSize: 18,
        textAlign:'justify',
        textAlignVertical:'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
      },
      title: {
        color:'white',    
        width:'100%',
        height:'40%',
        fontSize: 35,
        textAlignVertical:'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        textAlign:'center',
      },  
      subtitle: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        color:'white',    
        height:'20%',
        width:'100%',
        fontSize: 20,
        textAlignVertical:'center',
        textAlign:'center',
    },
  
    order: {
        color:'white',    
        height:'20%',
        width:'100%',
        fontSize: 18,
        textAlign:'center',
        textAlignVertical:'bottom',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    
    pickerContainer:{
        width:'100%',
        height:'40%',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    picker: {
        marginVertical: '5%',
        width:'40%',
        padding: 5,
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
    },
    
    textRsults:{
        color:'white',
        fontSize: 18,
        flex:0.5,
        width:'100%',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        textAlignVertical:'center',
    },
    
    colorResults:{
        width:'100%',
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor: 'rgba(0,0,0,0.0)',
    },
    colorResults_normal:{
        width:'100%',
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor: 'rgba(0,80,200,1)',
    },
    colorResults_overweight:{
        width:'100%',
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor: 'rgba(255,173,52,1)',
    },
    colorResults_o1:{
        width:'100%',
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor: 'rgba(247,114,17,1)',
    },
    colorResults_o2:{
        width:'100%',
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor: 'rgba(243,31,100,1)',
    },
    colorResults_o3:{
        width:'100%',
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor: 'rgba(255,0,0,1)',
    },
    imageImc: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
  });