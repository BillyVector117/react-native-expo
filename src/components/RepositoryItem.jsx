import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import StyledText from './StyledText'
import theme from '../theme'

const parseThousands = value => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}
const RepositoryStats = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <StyledText small fontWeight={'bold'} align="center">{parseThousands(props.stargazersCount)} </StyledText>
                <StyledText small align="center">Stars</StyledText>

            </View>
            <View>
                <StyledText small fontWeight={'bold'} align="center">{parseThousands(props.forksCount)} </StyledText>
                <StyledText small fontWeight={'bold'} align="center">Forks </StyledText>
            </View>
            <View>
                <StyledText small fontWeight={'bold'} align="center">{parseThousands(props.reviewCount)} </StyledText>
                <StyledText small fontWeight={'bold'} align="center">Reviews </StyledText>
            </View>
            <View>
                <StyledText small fontWeight={'bold'} align="center">{parseThousands(props.ratingAverage)} </StyledText>
                <StyledText small fontWeight={'bold'} align="center">Rating Av. </StyledText>
            </View>
        </View>
    )
}
const RepositoryHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View>
                <Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
                <StyledText fontWeight={'bold'} fontSize={'subheading'}>{fullName} </StyledText>
                <StyledText blue>{description} </StyledText>
                <StyledText style={styles.language}>{language} </StyledText>
            </View>
        </View>
    )
}
const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container} >

            <RepositoryHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5,
        marginVertical: 1,
        backgroundColor: '#faebd7',
        borderRadius: 10
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 5,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 5
    }

})

export default RepositoryItem
