import { View, Text, Button, Image, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router';
import { icons } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';

import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledSafeArea = styled(SafeAreaView)

const index = () => {

  const standOutStyle: string = 'font-bold text-white'

  return (
    <StyledSafeArea className='bg-background h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <StyledView className='w-full h-full items-center justify-center'>

          <StyledImage source={icons.textLogo} resizeMode='contain' className='h-24' />

          <StyledView className='mx-2'>
            <StyledText className='text-primary text-2xl font-bold text-center'>Make banking a child's play with
              <StyledText className='text-accent font-yatra'> Aashirvaad Bank</StyledText>
            </StyledText>
          </StyledView>

          <StyledView className='mx-3 my-4'>
            <StyledText className='text-gray-300 text-center leading-6'>Banking isn't just a business here, it's a{' '}
              <StyledText className={standOutStyle}>Commitment</StyledText> and matter of{' '}
              <StyledText className={standOutStyle}>Pride</StyledText> and{' '}
              <StyledText className={standOutStyle}>Responsibility</StyledText>
            </StyledText>
          </StyledView>

          <CustomButton 
            title='Proceed to Login'
            handlePress={() => router.push('/signIn')}
            containerStyles="min-w-fit mt-7" 
            textStyles={''} 
            isLoading={false}
          />

        </StyledView>
      </ScrollView>
      <StatusBar backgroundColor='#141414' style='light' />
    </StyledSafeArea>
  );

}

export default index