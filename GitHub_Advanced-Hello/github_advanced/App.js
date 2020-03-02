/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 /* jshint esversion: 6 */ 
 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
 
var Header2019=require("./header");
var New2019=require("./new");

//import {Header2019} from './header';

export default class App extends Component<Props> {

  render() {
    var news=[
      "1.快速了解微信小程序",
      "2.快速了解微信小程序",
      "3.快速了解微信小程序"
    ];
    return ( 
      <View style={styles.container}>
        <ScrollView>
          <Header2019></Header2019>
          <New2019 news={news}></New2019>
          <AntDesign name={'stepforward'} size={50} style={{color:'red'}}></AntDesign>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  
});

/*
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> To React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
//backgroundColor: '#F5FCFF', EF2D36
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

*/

/*
class Animal{
  constructor(name,color){
    this.name=name,
    this.color=color;
  }
  toString(){
    console.log('name:'+this.name+',color:'+this.color);
  }
}
var animal= new Animal('dog','white');
animal.toString();
*/


