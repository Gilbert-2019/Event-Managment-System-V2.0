import React, { Component } from 'react';
import {	 Text, 
			View,			
			StyleSheet,
			Image,
			TouchableOpacity,
			StatusBar,
			TextInput,
			Dimensions,	
			ScrollView,			} from 'react-native';
		
import Logo from '../components/logo';


const{width : WIDTH} = Dimensions.get('window')

class SelectUser extends Component {
	
	    static navigationOptions = {
		header : null
	}
	


  render() {
    return (
      <View style={styles.container}>
		<ScrollView>
		<StatusBar backgroundColor="#6200EE" barStyle="light-content" />
		
				
		<View style= {styles.alignItemsContainer}>
				<Text style= {styles.TextHeadingContainer}>Event Management System</Text>	
		</View>
		
		<Logo/>
		
		<View style= {styles.paddingTextInput}>
		
		<View style= {styles.alignItemsContainer}>
		
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  
					onPress={() => this.props.navigation.navigate('LoginScreenAdmin')}
					>
						
						<Text style = {styles. buttonText}>
						Admin
						</Text>
					</TouchableOpacity>
					</View>		
			
			</View>

            <View style= {styles.alignItemsContainer}>
		
		<View style = {styles.buttonalign2}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  
					onPress={() => this.props.navigation.navigate('LoginScreen')}
					>
						
						<Text style = {styles. buttonText}>
						Student
						</Text>
					</TouchableOpacity>
					</View>		
			
			</View>
				
			<View style = {styles.copyrightTextalign}>
			
				
			
					<Text style = {styles.copyrightText}>2019 © All rights | EMS |</Text>
					
			
				
					</View>
				
				
			</View>	
			
		</ScrollView>

		</View>
    );
  }
}

export default SelectUser;

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
		paddingTop:20,
		alignItems:'center',
	
	},
	
	alignInputContainer: {
		paddingTop:30,
	},
	
	
	
	TextInputContainer:{
		fontSize:13,
		width:WIDTH -75,
		borderRadius:10,
		borderWidth:1.5,
		borderColor:'#03DAC5',
		height:35,	
		paddingLeft:35,
		color:'white'
		
	},

	ErrorTextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:13,
		width:WIDTH -75,
		borderRadius:10,
		borderWidth:1.2,
		borderColor:'#ff0000',
		height:35,	
		paddingLeft:35,
		color:'white'
		
	},

	
	paddingTextInput:{
		paddingTop:15,
	},
	
	
	alignTextInput:{
		paddingTop:20,
	},
	
	alignItemsContainer:{
		alignItems:'center',
	},
	
	Buttoncontainer : {
		width:WIDTH - 190,
		borderRadius:10,
		backgroundColor:'#03DAC5',
		height:40,
		justifyContent: "center",
		alignItems: "center" ,
	},
	
	buttonalign:{
		
	paddingTop:40,
	
	},
    
    buttonalign2:{
		
        paddingTop:10,
        
        },

	buttonText :{
		fontFamily:'NewsCycle-Regular',
		fontSize:18,
		color:'#FFFFFF'
	},
	
	
	copyrightText: {
		fontFamily:'Pacifico-Regular',
		fontSize: 12,
		color:'#FFFFFF',
		
	
	},
	
	copyrightTextalign:{
	alignItems:'center',
	paddingTop:95,
	},
	
		
		
	

});
