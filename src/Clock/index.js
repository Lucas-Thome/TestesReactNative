import React, { Component } from 'react';

import { View, Text } from 'react-native';

import SttsBar from '../StatusBar'

class Clock extends Component{   
    constructor(props) {
        super(props);
        // Criando a variável a armazenando a data
        this.state = {date : new Date()}; 
        // Setando o novo estado da aplicação (A cada 1000 milisegundos sera renderizado novamente)
        setInterval(
            () => { this.setState({date: new Date()})             
        }, 1000);

    }
  
    render(){
        return(
        <Text style = {{fontSize: 40, padding: 5, margin: 20}}> Hora: {this.state.date.toLocaleTimeString()}</Text>
        );
    }
}


export default class ClockApp extends Component {
  render() {
    return(
        <View>
            <SttsBar/>
            <Clock/>
        </View>
    );
  }
}
