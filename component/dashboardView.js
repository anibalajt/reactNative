
'use strict'

import React, { Component } from 'react';
import{
    Text,
    View,
    StyleSheet
} from 'react-native';

class dashboardView extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>soy el componente dashboard</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title:{
        fontSize:24,
        color:"black"
    }
})

module.exports = dashboardView;
