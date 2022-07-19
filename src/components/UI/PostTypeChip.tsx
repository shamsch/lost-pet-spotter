import { StyleSheet } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-paper'
import { Colors } from '../../utils/constant'

interface PostTypeChipProps {
    type: string
    onPress: () => void
    isSelected: boolean
}

const PostTypeChip = ({ type, onPress, isSelected }: PostTypeChipProps) => {
    return (
        <>
            <Chip
                style={styles.chip}
                onPress={onPress}
                selected={isSelected}
                mode={"outlined"}
                textStyle={styles.text}
            >
                {type}
            </Chip>
        </>
    )
}

export default PostTypeChip

const styles = StyleSheet.create({
    chip: {
        margin: 1,
        padding: 5,
        borderRadius: 5,
        backgroundColor: Colors.tertiaryDark,
        width: "35%",
        textAlign: "center",

    },
    text: {
        color: Colors.blackLight,
        fontSize: 15,
        fontWeight: "bold",
    }
})