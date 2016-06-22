
'use strict'

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    Alert,
    StyleSheet
} from 'react-native';

class loginView extends Component {
    render() {
        return(
            <Image style={styles.container} source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/ff/fa/88/fffa88b3ffaaec3864e82498add89400.jpg'}}>
                <View >
                <Text style={styles.title}>
                Super Heroe
                </Text>
                <TouchableHighlight onPress={((this.onLogin.bind(this)))} style={styles.botton}>
                <Text style={styles.textoBotton}>
                Login
                </Text>
                </TouchableHighlight>
                </View>
            </Image>
        )
    }
    onLogin(){
        Alert.alert(
            "Acceso",
            "Te has logueado en el sistema",
            [
                {
                    text: "Aceptar",
                    onPress: (this.aceptar.bind(this))
                },
                {
                    text: "Cancelar",
                    onPress: (this.cancelar.bind(this))
                }
            ]
        )
    }
    aceptar(){
        this.props.navigator.replace({
            title:"Dashboard",
            name:"Dashboard",
            passProps:{}
        })
    }
    cancelar(){
        console.log("login cancelado")
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botton:{
        width:300,
        height:30,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10,
        borderRadius:8,
        borderWidth:1
    },
    textoBotton:{
        color:"white"
    },
    title:{
        backgroundColor:"rgba(0,0,0,0)",
        textAlign:"center",
        color:"white",
        fontSize:24
    }
})
module.exports = loginView;
