import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Booking from "../screens/Booking";
import ForgotPwd from "../screens/forgotpwd";
import home from "../screens/home";
import Location from "../screens/location";
import LoginView from '../screens/LoginView';
import Profile from "../screens/Profile";
import SignUp from "../screens/SignUp";
import Welcome from "../screens/Welcome";
// import About from '../screens/about';

const screens = {
    // Home: {
    //     screen: home
    // },
    Login: {
        screen: LoginView
    },
    ForgotPwd: {
        screen: ForgotPwd,
        navigationOptions: {
            headerStyle: {width: 0, height: 0},
            title: ''
        },
    },
    SignUp: {
        screen: SignUp,
    },
    Welcome: {
        screen: Welcome
    },
    Location:{
        screen: Location
    },
    Booking: {
        screen: Booking
    },
    Profile:{
        screen: Profile
    }

}
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
            headerStyle: {width: 0, height: 0, color:'white'},
            title: ''
    }
});
export default createAppContainer(HomeStack);