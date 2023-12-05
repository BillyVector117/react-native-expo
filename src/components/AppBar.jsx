import React from 'react'
import StyledText from './StyledText'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { StyleSheet } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'
import { Link, NativeRouter, useLocation } from 'react-router-native'
import { ScrollView } from 'react-native'
const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        // paddingBottom: 10,
        flexDirection: "row"
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.textPrimary
    }
})
const AppBarTab = ({ active, children, to }) => {
    // const { pathname } = useLocation()
    /* const { pathname } = useLocation()
    const active = pathname === to */
    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <NativeRouter>

            <Link to={to} component={TouchableWithoutFeedback}>
                <StyledText fontWeight={'bold'} style={textStyles}>
                    {children}
                </StyledText>
            </Link>
        </NativeRouter>
    )
}
const AppBar = () => {

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
                {/* <NativeRouter>

                    <Link to="/signin">
                        <Text>signin</Text>
                    </Link>
                </NativeRouter> */}

            </ScrollView>
        </View>
    )
}

export default AppBar