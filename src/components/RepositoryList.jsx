import React from 'react'
import { FlatList, Text, View } from 'react-native'
import repositories from '../../data/repositories'
import RepositoryItem from './RepositoryItem'
const RepositoryList = () => {
    return (
        <FlatList data={repositories} renderItem={({ item }) => (
            <RepositoryItem {...item} />
        )} />
    )
}

export default RepositoryList