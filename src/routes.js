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
  ForgotPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Forgot Password',
    },
  },
  ResetPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Reset Password',
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
});

export default createAppContainer(AuthStack); // Entry point



  /* const MainTabs = createBottomTabNavigator({
    Feed: {
      screen: Example,
      navigationOptions: {
        tabBarLabel: 'Feed',
      },
    },
    Search: {
      screen: Example,
      navigationOptions: {
        tabBarLabel: 'Search',
      },
    },
    Discover: {
      screen: Example,
      navigationOptions: {
        tabBarLabel: 'Discover',
      },
    },
  });
  
  const App = createSwitchNavigator({
    Loading: {
      screen: Example,
    },
    Auth: {
      screen: AuthStack,
    },
    App: {
      screen: MainTabs,
    },
  }); */