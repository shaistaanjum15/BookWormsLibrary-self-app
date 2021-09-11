import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  FlatList
} from 'react-native';

import AppHeader from "../components/AppHeader"

let books = require("../temp.json");

const extractKey = ({data}) => data
export default class GenreScreen extends Component {

  constructor(props){
    super(props);
  }

  renderItem = ({item}) => {
      return (
        <TouchableOpacity
            style={styles.routeCard}
             onPress={() => this.props.navigation.navigate('SubGenreScreen',{books:item.data,category:item.category})}>
             <Text style={styles.routeText} >{item.category}</Text>
             
           </TouchableOpacity>
      )
    }
  
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require("../assets/library-image.jpg")}
          style={styles.backgroundImage}>
          <View>
            <AppHeader/>
          </View>
        <View style={styles.flatContainer}>
          <FlatList
        data={books}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
          />
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatContainer:{
    alignItems : "center",
    justifyContent:"center",
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    width :240,
    height:70,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#370617',
    alignItems : "center",
    justifyContent:"center",
  },
  routeText:{
    color:"white",
    textShadowColor: 'red',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius : 5,
    fontSize : 30
  }
});
