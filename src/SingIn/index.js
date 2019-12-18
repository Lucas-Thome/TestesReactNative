import React, { Component } from 'react';

import { 
    View,
    Text,
    TextInput,
    Button,
    Alert,
    Image,
    KeyboardAvoidingView,  // Para o teclado não tampar os inputs
    Linking,
    TouchableOpacity  
} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';

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
                <View>
                    <Text 
                        style = {styles.createAcc}
                        onPress = {()=>Linking.openURL('http://google.com')}
                    >
                        Ainda não tem uma conta? Clique aqui
                    </Text>
                </View>
            </View>
            </KeyboardAvoidingView>    
        
    );
  }
} 
