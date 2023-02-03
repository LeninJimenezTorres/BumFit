import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';

export const Imc = () => {
    const [country, setCountry] = useState('Unknown');
    const [weight, setweight] = useState(1)
    const [height, setheight] = useState(1)
    const [imc, setimc] = useState(1)
    const [risk, setrisk] = useState('Normal')

    const weightlist = []
    const heightlist = []
    const intervalsWeight = 400;
    const intervalsHeight = 250;

    for (let i = 20; i < intervalsWeight; i+=0.5) {
        weightlist.push(i)
    }
    for (let i = 50; i < intervalsHeight; i++) {
        heightlist.push(i)
    }
    useEffect(() => {
        let aux:any = (weight/((height*0.01)*(height*0.01))).toFixed(2)
        setimc(aux)
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
            <Text style={styles.text}>IMC</Text>
            <Text>Índice de Masa Corporal</Text>
            <Text>El IMC es un factor predictivo que nos ayuda a saber si tu peso es correcto, insuficiente o el grado de obesidad</Text>
            <View>
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
            <Text style={styles.text}>IMC: {imc}</Text>
            <View>
                <Text>Riesgo: {risk}</Text>
            </View>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'yellow'
    },
    text: {
      fontSize: 24,
    },
    picker: {
      marginVertical: 50,
      width: 300,
      padding: 5,
      borderWidth: 1,
      borderColor: "#666",
      backgroundColor: 'rgba(255,255,255,1)',
    },
});