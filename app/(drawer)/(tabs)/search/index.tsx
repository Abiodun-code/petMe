import { View, Text } from 'react-native'
import React from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SearchStack from './components/searchStack'

const Search = () => {
  return (
    <View className='flex-1' style={{ backgroundColor: Colors.white, paddingTop: hp(6) }}>
      <SearchStack/>
    </View>
  )
}

export default Search