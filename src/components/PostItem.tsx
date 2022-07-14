import { Image, Text, Pressable } from 'react-native'
import { Post } from '../typescript/types'
import MapView from './Map'

interface PostItemProps {
    post: Post
}


const PostItem = ({ post }: PostItemProps) => {
    return (
        <Pressable>
          
        </Pressable>
    )
}

export default PostItem