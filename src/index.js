import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Constants from 'expo-constants';


const LoveCalculator = () => {
    const [maleName, setMaleName] = useState('');
    const [femaleName, setFemaleName] = useState('');
    const [lovePercentage, setLovePercentage] = useState('');
    const [loveComment, setLoveComment] = useState('')

    const calculateLove = () => {
    const maxlimit = 100

    let rand = Math.random() * maxlimit
    rand = Math.floor(rand)

    if (rand < 40){
        setLoveComment('Ойй кажется у вас проблема')
    } else if(rand < 80){
        setLoveComment('У вас крепкий отношение')
    }else if(rand > 81){
        setLoveComment('Кажется вы нашли свою любов')
    }


    setLovePercentage(rand.toString())
    return rand
  }


  return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>Love Calculator</Text>
        </View>
        <TextInput 
            placeholder='Пацан'
            value={maleName}
            onChange={text => setMaleName(text)}
            style={styles.input}
        />
        <TextInput
            placeholder='Девушка'
            value={femaleName}
            onChange={text => setFemaleName(text)}
            style={styles.input}
        />

        <TouchableOpacity 
            style={styles.button}
            onPress={calculateLove}
        >
            <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>

        <View style={styles.round}>
            <Text style={styles.result}>
                {lovePercentage}%
            </Text>
        </View>

        <View style={styles.conclusion}>
            <Text style={styles.result}>
                {loveComment}
            </Text>
        </View>
    </View>
  )
}

export default LoveCalculator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFEDBD',
      paddingTop: Constants.statusBarHeight
    },

    title:{
        height: 80,
        width: '100%',
        backgroundColor: '#0a1d37',
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },

    input:{
        height: 55,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        fontSize: 18
    },

    button:{
        height: 50,
        margin:15,
        borderWidth: 1/2,
        borderRadius: 15,
        fontSize: 18,
        backgroundColor: '#ffbd9b',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText:{
        fontSize: 20,
        fontWeight: 'bold'
    },

    round:{
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    result:{
        fontSize: 30,
        fontWeight: 'bold'
    },

    conclusion:{
        padding: 20,
    }

  });
