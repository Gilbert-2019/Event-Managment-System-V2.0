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

class LoginScreen extends Component {
	
	    static navigationOptions = {
		header : null
	}
	
	 state = { 
	  		username: '',
			password: '',
			usernameError: false,
			PasswordError: false
		 };
			

		 onchangePassword =(text)=> {
			console.log("onchangePassword", text);
			this.setState( { password: text } );
			this.setState( { PasswordError: false } );
		 }

		 onchangeUsername =(text)=> {
			console.log("onchangeUsername", text);
			this.setState( { username: text } );
			this.setState( { usernameError: false } );
		 }

		 onPressloginButton = () => {
			 if(this.state.username.length !== 0){
				
				if(this.state.password.length !== 0) {
					
					console.log("onPressloginButton", this.state.username.length);
					this.props.navigation.navigate('HomeScreen')

				} else {
					this.setState( { PasswordError: true } );
				}

				
			 } else {
				console.log("onPressloginButton");
				this.setState( { usernameError: true } );
				if(this.state.password.length == 0) {
					this.setState( { PasswordError: true } );
				} 
			 }
			
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
		<View style={styles.alignTextInput}>
			<TextInput style= {this.state.usernameError == true ? styles.ErrorTextInputContainer : styles.TextInputContainer}
						placeholder={'User Name'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						onChangeText={(text) => this.onchangeUsername(text)}
						/>
		 
		 
		</View>
		
		<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<TextInput style= {this.state.PasswordError == true ? styles.ErrorTextInputContainer : styles.TextInputContainer}
						placeholder={'Password'}
						secureTextEntry={true}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						onChangeText={(text) => this.onchangePassword(text)}
						/>
		 
				</View>
		</View>
				
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  
					onPress={() => this.onPressloginButton()}
					>
						
						<Text style = {styles. buttonText}>
						Login
						</Text>
					</TouchableOpacity>
					</View>		
			
			</View>
				
			<View style = {styles.copyrightTextalign}>
			
				<TouchableOpacity onPress={() => this.props.navigation.navigate('SignupScreen')}>
			
					<Text style = {styles.copyrightText}>Don't have an account ? | SignUp |</Text>
					
				</TouchableOpacity>
				
					</View>
				
				
			</View>	
			
		</ScrollView>

		</View>
    );
  }
}

export default LoginScreen;

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
	paddingTop:50,
	},
	
		
		
	

});
