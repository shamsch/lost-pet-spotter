import { FlatList } from 'react-native'
import { Post } from '../typescript/types'
import PostItem from './PostItem'

interface PostListProps {
    posts: Post[]
}

const PostList = ({ posts }: PostListProps) => {
    return (
        <>
            <FlatList
                data={posts}
                keyExtractor={(post) => post.id}
                renderItem={({ item }) =>
                    <PostItem post={item} />
                }
            />
        </>
    )
}

export default PostList