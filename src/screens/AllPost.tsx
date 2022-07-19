import { useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import PostList from '../components/PostList'
import SearchByCity from '../components/SearchByCity'
import useSupabase from '../hooks/useSupabase'
import { Post } from '../typescript/types'
import { Colors, DUMMY_POSTS } from '../utils/constant'

const AllPost = () => {
  const { getPosts, getPostByCity } = useSupabase()
  const focused = useIsFocused()
  const [posts, setPosts] = useState<Post[] | undefined>()
  const [search, setSearch] = useState<string|undefined>()
  const [ascending, setAscending] = useState(false)

  useEffect(() => {
    if(search) {
       getPostByCity(search).then(posts => setPosts(posts))
    }
    else{
      getPosts(25, ascending).then(res => {
        setPosts(res)
      })
    }
  }, [search, ascending, focused])

  return (
    <View style={{backgroundColor: Colors.tertiaryLight}}>
      <SearchByCity
        search={search}
        setSearch={setSearch}
      />
      <PostList
        posts={posts ? posts : DUMMY_POSTS}
      />
    </View>

  )
}

export default AllPost