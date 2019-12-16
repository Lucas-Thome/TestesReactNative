// Consumindo API externa

import React, { Component } from 'react';

import { View, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

export default class Movies extends Component {

    constructor(props){        
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    data: responseJson.movies
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        if (this.state.isLoading){
            return(
                <View style = {styles.container}>
                    <ActivityIndicator
                        size = 'large'
                    />
                </View>
            )
        }
        else{
            let movies = this.state.data.map((val,key) => {
                return  <View key = {key} style = {styles.data}>
                            <Text> {val.title} </Text>
                        </View>
            });
            return(
                <View>
                    {movies}
                </View>
            )
        }
    }
}