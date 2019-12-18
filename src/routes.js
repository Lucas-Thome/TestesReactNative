// App.js
import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Example from './Example';
import Main from './mainPage';
import Clock from './Clock';
import Register from './Register';
import SignIn from './SingIn';
import PizzaTranslator from './PizzaTranslator';
import List from './List';
import Movies from './Movies';
import Chat from "./Chat";

const AuthStack = createStackNavigator({
  Landing: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Landing',
    },
  },
  Entrar: {
    screen: SignIn,
    navigationOptions: {
      headerTitle: 'Entrar',
    },
  },
  CriarConta: {
    screen: Register,
    navigationOptions: {
      headerTitle: 'Criar Conta',
    },
  },
  Início: {
    screen: Main,
    navigationOptions: {
      headerTitle: 'Main Page'
    }
  },
  Relógio: {
    screen: Clock,
    navigationOptions: {
      headerTitle: 'Relógio'
    }
  },
  PizzaTranslator: {
    screen: PizzaTranslator,
    navigationOptions: {
      headerTitle: 'Tradutor Pizza'
    }
  },
  List: {
    screen: List,
    navigationOptions: {
      headerTitle: 'Lista'
    }
  },
  Movies: {
    screen: Movies,
    navigationOptions: {
      headerTitle: 'Filmes'
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      headerTitle: 'Chat'
    }
  },
});

const MainNavigation = createDrawerNavigator({
  Entrar: {
    screen: SignIn
  },
  Landing: {
    screen: AuthStack
  }
})

export default createAppContainer(MainNavigation); // Entry point