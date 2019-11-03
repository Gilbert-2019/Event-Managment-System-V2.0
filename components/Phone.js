import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class Phone extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width:100, height: 100}}
          source={require('../images/Phone.png')}
        />
	</View>
    );
  }
}


const styles = StyleSheet.create({
	imagecontainer:{
		top:'3%',
		paddingLeft:'8%',
		
	},
})