import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  AppNavigator,
  AuthNavigator
} from './'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/slices/authSlice';

const AppRoute = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <NavigationContainer>
            {/* Conditional stack navigator rendering based on login state */}

            {
                isLoggedIn ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppRoute