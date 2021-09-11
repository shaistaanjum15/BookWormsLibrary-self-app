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
  FlatList,
} from 'react-native';

export default class SubGenreScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({ item }) => {
    let items = [];
    if (item) {
      return (
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('F1',
          item)}>
          <Text style={styles.routeText}>{item.title}</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
        </TouchableOpacity>
      );
    }

    return <View>{items}</View>;
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/library-image.jpg')}
          style={styles.backgroundImage}>
          <View style = {{backgroundColor: 'olive', 
          justifyContent:"center",
          alignItems:"center"}}>
            <Text style={styles.categoryText}>
              {this.props.navigation.getParam('category')}
            </Text>
          </View>
           <View style = {{ 
          justifyContent:"center",
          alignItems:"center"}}>
            <FlatList
              data={this.props.navigation.getParam('books')}
              renderItem={this.renderItem}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Genre')}>
            <Text style={styles.routeText}>Back to Genre</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
   
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  categoryText: {
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
    textAlign: 'center'
  },
  btn:{
    flex:0.13,
    marginTop:20,
    borderRadius: 30,
    backgroundColor: '#B76E79',
    alignItems : "center",
    justifyContent:"center",
  
  }
});
