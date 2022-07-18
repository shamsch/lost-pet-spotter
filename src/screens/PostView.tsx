import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import SinglePost from '../components/SinglePost';
import { RootStackParamList } from '../typescript/types'

type PostViewProps = NativeStackScreenProps<RootStackParamList, "PostView">;

const PostView = ({ route }: PostViewProps) => {
  const { post } = route.params
  return (
    <>
      <SinglePost post={post} />
    </>
  )
}

export default PostView;