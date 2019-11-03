import React, { Component } from 'react';
import { Text, 
			View,
			StyleSheet,
			Image,
			TouchableOpacity,
			ActivityIndicator,
			Dimensions,
			StatusBar,			
			ScrollView,	
			style,	
			ProgressBarAndroid,			} from 'react-native';
			
import { Button } from 'react-native';
			
import WelcomeLogo from '../components/Welcomelogo';

const{width : WIDTH} = Dimensions.get('window')
			

 class WelcomeScreen extends Component {
	 static navigationOptions = {
		header : null
	}
	
		constructor(props) {
		super(props);
		this.state = {
			isLoading:true,
			dataSource:null,
		}
		}

		componentWillMount() {
			setTimeout(() => {
				this.props.navigation.navigate('SelectUser')
			}, 1500);
		}
		
  render() {
    return (	

					<View style={styles.container}>
					<StatusBar backgroundColor="#6200EE" barStyle="light-content" />

						
					 
						
							<WelcomeLogo/>
							
							<Text style= {styles.TextHeadingContainer}>Event Management System</Text>
						
						<Text style= {styles.TextExperienceContainer}>
							Real World communication..
						</Text>					

					  <View style={styles.progrescontainer}>
							
							<ProgressBarAndroid styleAttr="Horizontal" color="#00ffff" />

					</View>
					 
					
					
					<View style = {styles.copyrightTextalign}>
					<Text style = {styles.copyrightText}>2019 © All rights | EMS</Text>
					</View>
					
					
					

					</View>
    );
  }
}


export default WelcomeScreen;


const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#6200EE',
		flex: 1,
		alignItems: "center" ,
		
		
	},
	
	TextHeadingContainer : {
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'BadScript-Regular',
		fontSize: 30,
		paddingTop:10,
	
	},
	
	TextAppContainer : {
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'Courgette-Regular',
		fontSize: 16,
		paddingTop:8,
		
	},
	
	TextExperienceContainer : {
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'Pacifico-Regular',
		fontSize: 15,
		paddingTop:8,
		
	},
	
	
	buttonText :{
		fontFamily:'Montaga-Regular',
		fontSize:18,
		color:'#344955'
	},
	
	Buttoncontainer : {
		width:WIDTH - 170,
		borderRadius:20,
		backgroundColor:'#F9AA33',
		height:40,
		justifyContent: "center",
		alignItems: "center" ,
		
	
	},
	
	buttonalign:{
		
	paddingTop:20,
	
	},
	
	buttonalign2:{
		
	paddingTop:40,
	
	},
	
	alignText: {
	alignItems:'center',
	},
	
	copyrightText: {
		fontFamily:'NewsCycle-Regular',
		fontSize: 13,
		color:'#FFFFFF',
		
	
	},
	
	copyrightTextalign:{
	alignItems:'center',
	paddingBottom:15,
	},
	
	 horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  
   progrescontainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
  },

	
	
	


	});    