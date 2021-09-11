import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GenreScreen from './Genre';
import SubGenreScreen from '../genreScreens/SubGenreScreen';
import F1 from "./F1";

export default class HomeScreen extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  
  Genre: {
    screen: GenreScreen,
    navigationOptions: {
      header: true,
    },
  },
  SubGenreScreen: {
    screen: SubGenreScreen,
    navigationOptions: {
      header: false,
    },
    initialRouteName:{
      screen: 'Genre',
    }
  },
   F1: {
    screen: F1,
    navigationOptions: {
      header: false,
    },
    initialRouteName:{
      screen: 'Genre',
    }
   }
});

const AppContainer = createAppContainer(AppNavigator);

