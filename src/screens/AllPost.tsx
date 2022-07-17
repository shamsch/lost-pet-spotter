import { View, Text } from 'react-native'
import PostList from '../components/PostList'
import { DUMMY_POSTS } from '../utils/constant'

const AllPost = () => {
  return (
    <PostList
      posts={DUMMY_POSTS}
    />
  )
}

export default AllPost