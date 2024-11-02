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
  borderLW?: number | undefined,
  borderRW?: number | undefined,
  borderTW?: number | undefined,
  borderBW?: number | undefined,
  borderW?: number | undefined,
  borderC?: undefined,
  pL?: number,
  flex?: number,
  justContent?: string,
  itemAlign?: string,
  flexD?: string,
  status?: undefined | any
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
  flexD,
  borderBW,
  borderLW,
  borderTW,
  borderRW,
  status,
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
    borderTopWidth: borderTW,
    borderRightWidth: borderRW,
    borderBottomWidth: borderBW,
    borderLeftWidth: borderLW,
    ...status
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      onPress={press}
      style={dynamicStyles}  // Apply inline styles for dynamic values
    >
      {children}
    </TouchableOpacity>
  );
}

export default Button;