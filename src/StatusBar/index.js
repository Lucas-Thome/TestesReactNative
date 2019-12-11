import React, { Component } from 'react';

import {  StatusBar } from 'react-native';

export default class SttsBar extends Component {
  render() {
    return(
            <StatusBar
                barStyle = 'dark-content'
            />
    )
  }
}
