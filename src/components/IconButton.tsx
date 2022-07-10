import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

interface IconButtonProps {
    icon: any,
    size: number,
    color: string | undefined,
    onPress: () => void
}

const IconButton = ({icon, size, color, onPress }:IconButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={size} color={color}/>
    </Pressable>
  )
}

export default IconButton