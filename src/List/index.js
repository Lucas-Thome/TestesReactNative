import React, { Component } from 'react';

import { 
    View,
    FlatList, 
    ScrollView,
    Text
}from 'react-native';

import styles from './styles';

const data = [
    {key: 'linha 1'},
    {key: 'linha 2'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
    {key: 'linha 3'},
]

export default class List extends Component {
  render() {
    return (
        <View style = {styles.container}> 
                <FlatList
                    data = {data}
                    renderItem = {({item}) => <Text style = {styles.textItem}>{item.key}</Text> }
                />
        </View>
    );
  }
}
