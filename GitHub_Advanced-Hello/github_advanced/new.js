/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 /* jshint esversion: 6 */ 

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


 class New2019 extends Component<Props> {
     show(title) {
         alert(title);
     };
    render(){
        //定义数组,用于存储设置Text组件；
        var newsComponents=[];
        for (var i in this.props.news) {
            var text= (
                <Text
                    onPress={this.show.bind(this,this.props.news[i])}
                    style={styles.news_item}
                    nemberOfLines={2}
                    key={i}>
                    {this.props.news[i]}

                </Text>
            );
            newsComponents.push(text);
        };
        return (
           <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
               {newsComponents}
           </View>
        );
    }
};
var styles=StyleSheet.create({
    flex:{
        flex:1,
    },
    news_title:{
        fontSize:20,
        fontWeight:"bold",
        color:"#CD1D1C",
        marginLeft:10,
        marginTop:15,
    },
    news_item:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:30,
    },
    
});


module.exports=New2019;