import React, { Component } from 'react';
import { 
    View,
    TextInput,
    Button,
    Alert,
    KeyboardAvoidingView,
    Image,
    Picker
} from 'react-native';

import styles from './styles';
import SttsBar from '../StatusBar';


// TODO: Função para ir para o próximo campo


export default class Register extends Component {

   state = {
      cidade: ''
   }

   render() {
      return(
         <KeyboardAvoidingView behavior = 'padding' style = {styles.container} >   
            <SttsBar/>
            <View style = {styles.container}>
               <View style = {styles.logoContainer}>
                  <Image
                     source = {require('../../assets/logo-ipsense-light.png')}
                  />
               </View>
               <View>
                  
                  <TextInput 
                     style = {styles.textArea}
                     placeholder = "Nome Completo"
                     returnKeyType = 'next'
                     maxLength = {50}
                  />

                  <Picker 
                     style = {styles.textArea}
                     selectedValue = {this.state.cidade}
                     onValueChange = {
                        (itemValor, itemIndex) =>
                           this.setState({
                              cidade: itemValor
                           })
                     }
                  >
                     <Picker.Item label="Escolha o estado" value=""/>
                     <Picker.Item label="Rio de Janeiro" value="RJ"/>
                     <Picker.Item label="São Paulo" value="SP"/>
                  </Picker>

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
                  <TextInput                       // TODO:  Fazer a validação
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
                     color = '#F76F1D'
                  />
               </View>
            </View>
         </KeyboardAvoidingView>
      );
  }
}