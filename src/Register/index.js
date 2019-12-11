import React, { Component } from 'react';
import { 
    View,
    TextInput,
    Button,
    Alert,
    KeyboardAvoidingView
} from 'react-native';

import styles from './styles';
import SttsBar from '../StatusBar'

export default class Register extends Component {
  render() {
      return(
         <KeyboardAvoidingView behavior = 'padding' style = {styles.container} >   
            <SttsBar/>
            <View style = {styles.container}>
               <View>
                  <TextInput 
                     style = {styles.textArea}
                     placeholder = "Nome Completo"
                     returnKeyType = 'next'
                     maxLength = {50}
                  />
                  <TextInput 
                     style = {styles.textArea}
                     placeholder = "E-mail"
                     keyboardType = 'email-address'
                     returnKeyType = 'next'
                     autoCapitalize = 'none'
                  />
                  <TextInput 
                     style = {styles.textArea}
                     placeholder = "Usuário"
                     returnKeyType = 'next'
                     autoCapitalize = 'none'
                     maxLength = {18}
                  />
                  <TextInput 
                     style = {styles.textArea}
                     placeholder = "Telefone"
                     keyboardType = 'phone-pad'
                     returnKeyType = 'next'
                  />
                  <TextInput 
                     style = {styles.textArea}
                     placeholder = "Senha"
                     secureTextEntry
                     returnKeyType = 'next'
                     autoCapitalize = 'none'
                     maxLength = {15}
                  />
                  <TextInput 
                     style = {styles.textArea}
                     placeholder = "Confirme Sua Senha"
                     secureTextEntry
                     returnKeyType = 'go'
                     autoCapitalize = 'none'
                     maxLength = {15}              
                  />
               </View>
               {/*Style do Button tem que ser na View !!*/}
               <View style = {styles.button} > 
                  <Button
                     onPress = {() => {Alert.alert(' Cadastrado com sucesso!')}}
                     title = 'Enviar'
                  />
               </View>
            </View>
         </KeyboardAvoidingView>
      );
  }
}
