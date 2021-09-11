import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';

export default class F1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {this.props.navigation.getParam('title')}
        </Text>
        <Text style={styles.authorText}>
          {this.props.navigation.getParam('author')}
        </Text>
        <View style = {styles.descriptionContainer}>
        <ScrollView>
          <Text style={styles.descriptionText}>
            {this.props.navigation.getParam('description')}
          </Text>
        </ScrollView>
        </View>

        <TouchableOpacity style = {styles.genreButtonCard}
          onPress={() => this.props.navigation.navigate('Genre')}>
          <Text style = {{fontSize:30}}>Back to Genre screen</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.genreButtonCard}
          onPress={() => this.props.navigation.navigate('SubGenreScreen')}>
          
          <Text style = {{fontSize:30}}>Back to Book titles</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151E3D',
    marginTop:30
  },
  descriptionContainer:{
    flex:0.75,
    justifyContent:"center",
    alignItems:"center"
  },
   titleText: {
     fontSize : 40,
     color : "#FFDF00",
     fontFamily : "bold"
   },
  descriptionText: {
    fontSize: 20,
    color: 'white',
    marginLeft:20

  },
  authorText: {
    fontSize:30,
    color : "violet"
  },

  genreButtonCard : {
    flex:0.10,
    marginTop:20,
    borderRadius: 30,
    backgroundColor: '#B76E79',
    alignItems : "center",
    justifyContent:"center",
  },
 
});