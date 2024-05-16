import { View, Text, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const index = () => {

  return (
    <View className="flex-1 flex justify-center items-center bg-background">
      <Text className='text-primary text-3xl'>Welcome Anshuman</Text>
      <StatusBar style='auto' />
      <Link href={'/profile'} className='text-blue-500'>Go to Profile</Link>
    </View>
  );

}

export default index