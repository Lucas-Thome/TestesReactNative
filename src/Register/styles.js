import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex : 1 ,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    logoContainer:{
        marginBottom: 30,
        flexDirection: 'row',
        flex: 1
    },
    textArea: {
        backgroundColor: '#ecf0f1',
        fontSize: 20,
        textAlign: 'center',
        height: 45,
        padding: 10,
        margin: 10
    },
    button: {
        margin: 20,
        padding: 20,
    },
})

export default styles;