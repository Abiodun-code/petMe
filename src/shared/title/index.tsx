import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface Props {
  children: React.ReactNode;
  font?: string;
  variant?: string | undefined;
  color?: string | undefined;
  showIcon?: boolean;
  textA?: string | undefined;
}

const Title = ({ children, font, variant, color, showIcon = false, textA }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {showIcon && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: hp(1.5) }}>
          <AntDesign name="close" size={hp(3)} color="black" />
        </TouchableOpacity>
      )}

      <Text
        variant={variant || 'titleMedium'}
        style={{ fontFamily: font || 'i700', color: color, textAlign: textA || 'center', flex: 1 }}
      >
        {children}
      </Text>
    </View>
  );
};

export default Title;
