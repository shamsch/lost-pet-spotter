import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Post } from '../typescript/types'

interface SinglePostProps {
    post: Post
}

const SinglePost = ({post}: SinglePostProps) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
    </View>
  )
}

export default SinglePost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    body: {
        fontSize: 16,
        marginBottom: 10,
    }
})