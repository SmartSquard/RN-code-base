import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../container/Login';
import Signup from '../container/Signup';
import Dashboard from '../container/Dashboard';

const RootStack = createStackNavigator(
    {
        Home,
        Signup,
        Dashboard
    },
    {
        initialRouteName: 'Home',
    },
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;
