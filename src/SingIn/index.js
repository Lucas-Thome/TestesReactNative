import React, { Component } from 'react';

import { 
    View,
    TextInput,
    Button,
    Alert,
    Image,
    KeyboardAvoidingView, // Para o teclado não tampar os inputs
 } from 'react-native';

import styles from './styles';
import SttsBar from '../StatusBar'

export default class SingIn extends Component {
  render() {
    return (
        
        <KeyboardAvoidingView beahavior = 'padding' style = {styles.container}> 
            <SttsBar/>
            <View style = {styles.container}>
                <View style = {styles.logoContainer}>
                    <Image source = {require('../../assets/logo-ipsense-light.png')}/>
                </View>
   
                <View style = {styles.textInput}>
                    <TextInput 
                        placeholder = 'Usuário ou E-mail'
                        keyboardType = 'email-address'
                        returnKeyType = 'next'
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        autoCapitalize = 'none'
                    />
                </View>
                
                <View style = {styles.textInput}>
                    <TextInput    
                        placeholder = 'Senha'
                        secureTextEntry
                        returnKeyType = 'send'
                        ref = {(input) => this.passwordInput = input }
                        onSubmitEditing = {() => Alert.alert('Logando, aguarde...')} // Ação quando o formulário é enviado
                    /> 
                </View>
                
                <View style = {styles.button}>
                    <Button
                        onPress = {() => Alert.alert('Logando ...')} // Ação quando o formulário é enviado
                        title = "Entrar"
                        color = '#F76F1D'
                    />
                </View>
            </View>
            </KeyboardAvoidingView>    
        
    );
  }
} 
