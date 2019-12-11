import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles';
import SttsBar from '../StatusBar';

class Props extends Component{
    
    render(){
        return(
            <Text style = {styles.texto }>
                Testando Props {this.props.teste}
            </Text>
        )
    }
}

export default class Main extends Component {

    render() {
      return(
          <View style = {styles.container}>
              <SttsBar/>
              <Text style = {styles.texto}>
                  Main Page
              </Text>
              <Props teste = 'Fuck'/>
          </View>
      )
  }
}
