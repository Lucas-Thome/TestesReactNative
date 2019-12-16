import React, { Component } from 'react';

import { View, ProgressBarAndroid, StyleSheet } from 'react-native';

export default class ProgressBar extends Component {
  render() {
    return (
        <View style = {styles.container}>
            <ProgressBarAndroid/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})  

