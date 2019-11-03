import React, { Component } from 'react';
import { Text, 
			View,
			StyleSheet,
			Image,
			TouchableOpacity,
			StatusBar,
			TextInput,
			Dimensions,	
			ScrollView,
			Picker,	
			} from 'react-native';
			
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
		
import Quote from '../components/Quotes';	
import QuoteText from '../components/Quote';	
import Menu from '../components/Menu';

import Group1 from '../components/EventReq';	
import Group2 from '../components/RequestCom';



const{width : WIDTH} = Dimensions.get('window')
			

 class AdminHomeScreen extends Component {
	 
	 static navigationOptions = {
		header:null,
		
	}
	 
	 
	 constructor(props){
			super (props);
				this.state={
				pickerSelection:'selectable'
							}
						}
	

			
  render() {
    return (

		
		<View style={styles.container}>
		<Menu/>
		

		<View style={styles.ImagerowContainer}>
		<Quote/>
		<QuoteText/>
		</View>

		
		<StatusBar backgroundColor="#6200EE" barStyle="light-content" />
		<ScrollView>
		
		<View style={styles.paddingTextInput}>
		<View style={styles.alignItemsContainer}>
		<Text style= {styles.TextHeadingContainer}>Menu</Text>
		</View>
		</View>
		
			<View style={styles.paddingImgInput}>
			<View style={styles.ImageContainer}>
			
			
			 <TouchableOpacity onPress={() => this.props.navigation.navigate('EventsTablesScreen')}>
             <Group1/>
			</TouchableOpacity>
			
			
			</View>

			
			<View style={styles.paddingImgGapInput}>
			<View style={styles.ImageContainer}>
			 <TouchableOpacity onPress={() => this.props.navigation.navigate('RequestSelection')}>
             <Group2/>
			</TouchableOpacity>
			
		
			</View>
			</View>
			</View>	

			
		</ScrollView>

 
		</View>
		
			
    );
  }
}


export default AdminHomeScreen;

const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#6200EE',
		flex: 1,

		
		
	},
	
	TextHeadingContainer : {
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'BadScript-Regular',
		fontSize: 30,
		paddingTop:5,
	
	},
	
	paddingTextInput:{
		paddingTop:'10%',
		alignItems:'center',
	},
			
	paddingImgInput:{
		paddingTop:'5%',
		alignItems:'center',
	},
	
		paddingImgGapInput:{
		paddingTop:'0.5%',
	},
	
	paddingImgleftGapInput:{
		paddingLeft:'2%',
	},
	
	alignTextInput:{
		paddingTop:'15%',
	},
	
	alignItemsContainer:{
		alignItems:'center',
	},
	
	
	ImageContainer:{
        flexDirection: 'row',
		alignItems:'center',
    },
	
	ImagerowContainer:{
        flexDirection: 'row',
		paddingTop:'3%',
    },
		
		
		
	

});