import { FlatList } from 'react-native'
import { Post } from '../typescript/interfaces'
import PostItem from './PostItem'

interface PostListProps {
    posts: Post[]
}


const PostList = ({ posts }: PostListProps) => {
    return (
        <>
            <FlatList
                data={posts}
                keyExtractor={(post) => post.postId.toString()}
                renderItem={({ item }) => {
                    return <PostItem post={item} />
                }
                }
            />
        </>
    )
}

export default PostList