import { StyleSheet, Image, Text, ScrollView, View } from 'react-native'
import React from 'react'
import { Post } from '../typescript/types'
import { Avatar, Card, Chip, Paragraph } from 'react-native-paper'
import { format } from 'timeago.js'
import { Colors } from '../utils/constant'
import { getStaticMapUrl } from '../utils/googleMapStatic'
import openMap from 'react-native-open-maps'
import ReusableButton from './UI/ReusableButton'

interface SinglePostProps {
    post: Post
}

const SinglePost = ({ post }: SinglePostProps) => {
    const staticMapUri = getStaticMapUrl(post.lat, post.lng)

    return (
        <ScrollView>
            <Card style={styles.container}>
                <Card.Title
                    title={post.title}
                    titleStyle={{ color: Colors.black }}
                    subtitle={format(post.created_at)}
                    subtitleStyle={{ color: Colors.black }}
                    titleNumberOfLines={4}
                    left={(props) => (
                        <Avatar.Icon
                            {...props}
                            icon="help"
                            color="white"
                            style={{ backgroundColor: Colors.primary }}
                        />
                    )}
                />
                <Card.Content>
                    <Chip
                        icon="map-marker"
                        style={{
                            backgroundColor: Colors.primary,
                            width: "40%",
                            margin: 5
                        }}
                    >
                        {post.city}
                    </Chip>
                    <Paragraph
                        style={styles.description}
                        dataDetectorType="all"
                    >
                        {post.body}
                    </Paragraph>

                    {
                        post.imgUrl !== "N/A" &&
                        <Image
                            style={styles.image}
                            source={{ uri: post.imgUrl }}
                        />
                    }

                    <Text
                        style={styles.locationHeading}
                    >
                        Location:
                    </Text>
                    <Image
                        source={{ uri: staticMapUri }}
                        style={{ width: "100%", height: 200 }}
                    />

                </Card.Content>
                <Card.Actions>
                    <ReusableButton
                        onPress={() => openMap({ latitude: post.lat, longitude: post.lng })}
                        text="Open in Maps"
                        textColor={Colors.white}
                        backgroundColor={Colors.primary}
                        borderColor={Colors.primaryDark}
                    />

                </Card.Actions>

            </Card>
        </ScrollView>

    )
}

export default SinglePost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: Colors.tertiaryLight
    },
    description: {
        fontSize: 18,
        marginVertical: 10,
        color: Colors.black
    },
    image: {
        width: "100%",
        height: 200,
        marginVertical: 10,
    },
    locationHeading: {
        fontSize: 18,
        marginVertical: 10,
        fontWeight: "bold",
        color: Colors.primary,
    },
})