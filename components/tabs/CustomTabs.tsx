import Colors from '@utils/colors';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AntDesign } from '@expo/vector-icons'

const CustomTabs  = ({ state, descriptors, navigation })=> {

  const icons = {
    "home": (props: any) => <AntDesign name='home' size={hp(3)} color={Colors.black} {...props} />,
    "search": (props: any) => <AntDesign name='search1' size={hp(3)} color={Colors.black} {...props} />,
    "settings": (props: any) => <AntDesign name='setting' size={hp(3)} color={Colors.black} {...props} />
  }

  return (
    <View 
      style={style.tabBar}
      className='flex-row absolute justify-between items-center'
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        console.log('route name:', route.name)

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className='flex-1 items-center'
          >
            {isFocused ? (
              <View style={[
                isFocused && style.focusedIconContainer
              ]} className='rounded-full'>
                {icons[route.name]({
                  color: Colors.white, // Change icon color when focused
                })}
              </View>
            ) : (
              icons[route.name]({
                color: Colors.black, // Default icon color when not focused
              })
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomTabs

const style = StyleSheet.create({
  tabBar: {
    bottom:hp(3),
    backgroundColor: Colors.white,
    marginHorizontal: hp(10),
    paddingVertical: hp(1),
    borderRadius:hp(5),
    borderCurve:'continuous',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: hp(1) },
    shadowOpacity: 0.1,
    shadowRadius: hp(1),
    elevation: hp(.4),
  },
  focusedIconContainer: {
    backgroundColor: Colors.deepPrimary,
    padding: hp(2),
  },
})