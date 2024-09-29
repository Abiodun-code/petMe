import { View, Text } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const BottomSheet = ({bottomSheetRef, children}) => {
  return (
    <RBSheet 
       ref={bottomSheetRef}
       height={300}
       openDuration={250}
       draggable
       closeOnPressMask={true}
       closeOnPressBack={true}
       customStyles={{
        wrapper:{
          backgroundColor: 'rgba(0,0,0,0.5)',
          flex:1
        },
        draggableIcon:{
          backgroundColor: Colors.deepPrimary,
          width: hp(9)
        },
        container:{
          borderTopLeftRadius: hp(3),
          borderTopRightRadius: hp(3)
        }
       }}
    >

    </RBSheet>
  )
}

export default BottomSheet