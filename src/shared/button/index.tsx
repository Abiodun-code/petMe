import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Props {
  children: React.ReactNode,
  disabled?: boolean,
  bg?: any,
  press?: ((event: GestureResponderEvent) => void) | any,
  p?: number,
  pt?: number,
  mb?: number,
  borderR?: number | undefined,
  borderW?: number | undefined,
  borderC?: string,
  pL?: number,
  flex?: number,
  justContent?: string,
  itemAlign?: string,
  flexD?: string
}

const Button = ({
  children,
  disabled,
  bg,
  press,
  p,
  pt,
  mb,
  borderR,
  borderC,
  borderW,
  pL,
  flex,
  justContent,
  itemAlign,
  flexD
}: Props) => {

  // Combine className and dynamic inline styles
  const dynamicStyles = {
    backgroundColor: bg,
    padding: p,
    borderRadius: borderR || hp(7),
    paddingTop: pt,
    marginBottom: mb,
    borderColor: borderC,
    borderWidth: borderW,
    paddingLeft: pL,
    flex: flex,
    justifyContent: justContent,
    alignItems: itemAlign,
    flexDirection: flexD, 
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled}
      onPress={press}
      style={dynamicStyles}  // Apply inline styles for dynamic values
    >
      {children}
    </TouchableOpacity>
  );
}

export default Button;
