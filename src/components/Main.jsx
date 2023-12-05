import React from 'react'
import { Text, View } from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { NativeRouter, Navigate, Route, Router, Routes } from 'react-router-native'
const SignIn = () => <Text>About</Text>;
const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <NativeRouter>
                <Routes>
                    <Route exact path='/' element={<RepositoryList />} />
                    <Route  exact path='/signin' element={<SignIn />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>

            </NativeRouter>
        </View>

    )
}

export default Main