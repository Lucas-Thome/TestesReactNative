import React, { Component } from 'react';

import { View, TextInput, Text } from 'react-native';

import styles from './styles';
import SttsBar from '../StatusBar'

export default class PizzaTranslator extends Component {
    constructor(props){
        super(props);
        this.state = {text: ''};
    }
    
  render() {
      return(
          <View style = {styles.container}>
              <SttsBar/>
              <TextInput
                style = {styles.textArea}
                placeholder = "Digite o testo a ser traduzido!"
                onChangeText = {(text) => this.setState({text})}
              />

              <Text style = {styles.pizza}>
                  {this.state.text.split(' ').map((word) => (word)?'🍕':'' )} {/* split separa a frase pelos espaços, retornando um array que é percorrido pelo map, 
                                                                                    logo após a arrow function é executada e
                                                                                    o operador ternário "?" checa se a condição é true ou false 
                                                                                    e faz o "replace" de acordo com o resultado */}
              </Text>

          </View>
      )
  }
}
