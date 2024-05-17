import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

import { styled } from 'nativewind';

const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }: { title: string, handlePress: any, containerStyles: string, textStyles: string, isLoading: boolean }) => {
    return (
        <StyledTouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={
                `bg-transparent rounded-md border-2 border-accent p-2 justify-center items-center shadow-accent
                ${containerStyles}
                ${isLoading ? 'opacity-50' : ''}`
            }
            disabled={isLoading}
        >
            <StyledText className={`text-primary font-pbold p-1 ${textStyles}`}>{title}</StyledText>
        </StyledTouchableOpacity>
    )
}

export default CustomButton