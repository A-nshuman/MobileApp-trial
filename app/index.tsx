import { View, Text, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const index = () => {

  return (
    <View className="flex-1 flex justify-center items-center bg-background">
      <Text className='text-primary text-3xl'>Welcome Anshuman</Text>
      <StatusBar style='auto' />
    </View>
  );

}

export default index