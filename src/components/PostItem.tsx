import { Image, Text, Pressable } from 'react-native'
import { Post } from '../typescript/types'
import MapView from './MapView'

interface PostItemProps {
    post: Post
}


const PostItem = ({ post }: PostItemProps) => {
    return (
        <Pressable>
            <Text>{post.title}</Text>
            <Text>{post.body}</Text>
            <Image source={{ uri: post.imgUrl }} />
            <MapView lat={post.lat} lng={post.lng}/>
        </Pressable>
    )
}

export default PostItem