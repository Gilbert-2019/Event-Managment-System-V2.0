import React, {Component} from 'react';
import {Platform, 
		StyleSheet, 
		Text, 
		View,
		StatusBar} from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from'./screens/LoginScreen';
import HomeScreen from'./screens/HomeScreen';
import AdminHomeScreen from'./screens/AdminHomeScreen';
import SignupScreen from './screens/SignupScreen';
import SportScreen from './screens/SportsScreen';
import CompetationScreen from './screens/CompetationScreen';
import FunctionScreen from './screens/FunctionScreen';
import ConferenceScreen from './screens/ConferenceScreen';
import SelectUser from './screens/SelectUser';
import SignupScreenAdmin from './screens/SignupScreenAdmin';
import LoginScreenAdmin from './screens/LoginScreenAdmin';
import RequestSelection from './screens/RequestSelection';
import EventsTablesScreen from './screens/EventsTablesScreen';
import VerificationSuccess from './screens/VerificationSuccess';
import StudentVerificationSuccess from './screens/StudentVerificationSuccess';












import {createStackNavigator, createAppContainer} from 'react-navigation';





const AppNavigator = createStackNavigator({

	WelcomeScreen:WelcomeScreen,
	LoginScreen:LoginScreen,
	SignupScreen:SignupScreen,
	HomeScreen:HomeScreen,
	AdminHomeScreen:AdminHomeScreen,
	SportScreen:SportScreen,
	CompetationScreen:CompetationScreen,
	FunctionScreen:FunctionScreen,
	ConferenceScreen:ConferenceScreen,
	SelectUser:SelectUser,
	SignupScreenAdmin:SignupScreenAdmin,
	LoginScreenAdmin:LoginScreenAdmin,
	RequestSelection:RequestSelection,
	EventsTablesScreen:EventsTablesScreen,
	VerificationSuccess:VerificationSuccess,
	StudentVerificationSuccess:StudentVerificationSuccess,
	

	
}, {	
	
	defaultNavigationOptions:{
		headerStyle:{
			backgroundColor:'#6200EE'
			},
			
			headerTintColor: '#00ffff',
			
			headerTitleStyle: {
				fontSize:17,
				flex:1,
				
			}
		}
		
	}


);

const App = createAppContainer(AppNavigator);

export default App;