/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight
} from 'react-native';

const cards = './data/cards.json';
const Login = require("./component/loginView");
const Dashboard = require("./component/dashboardView");

var NavigatorBarRouteMapper = {
    LeftButton: function(route, navigator, index){
        if(index == 0){
            return null;
        }
        return(
            <TouchableHighlight onPress={() => {
                if(index > 0){
                    navigator.pop();
                }
            }}>
            <Text>Atras</Text>
            </TouchableHighlight>
        )
    },
    RightButton:function(route, navigator, index){
        return null;
    },
    Title:function(route, navigator, index){
        if(route.name == "Login"){
            return null;
        }
        return(
            <Text>{route.name}</Text>
        )
    }
}

class firstExample extends Component {
    renderScene(route,navigator){
        switch (route.name) {
            case "Login":
            return (
                <Login navigator={navigator} route={route}></Login>
            )
            break;
            case "Dashboard":
            return(
                <Dashboard navigator={navigator} route={route}></Dashboard>
            )
            break;
        }
    }
    render() {
        return (
            <Navigator style={{backgroundColor:"#fff"}}
            initialRoute={{name:"Login"}}
            renderScene={this.renderScene}
            configureScene={(route) => {
                if(route.sceneConfing){
                    return route.sceneConfing;
                }
                return Navigator.SceneConfigs.FloatFromRight
            }}
            navigationBar = {
                <Navigator.NavigationBar routeMapper={NavigatorBarRouteMapper}/>
            }
            />
        )
    }
}

const styles = StyleSheet.create({
    atras:{

    }
});

AppRegistry.registerComponent('firstExample', () => firstExample);
