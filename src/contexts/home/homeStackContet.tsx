import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import { homeStackChild, homeStackContextProps } from '../../types/homeStackType'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  withTiming,
} from "react-native-reanimated";

export const HomeStackContext = createContext({} as homeStackContextProps)

const HomeStackProvider = ({children}: homeStackChild) => {

  const translateY = useSharedValue(0); // Navbar's Y translation position
  const lastScrollY = useSharedValue(0); // Tracks the last scroll Y position
  const direction = useSharedValue(0); // Tracks the scroll direction (-1 for up, 1 for down)
  const isBottomReached = useSharedValue(true); // Track if the bottom is reached

  // Scroll handler to detect the direction and adjust the navbar's position dynamically
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentScrollY = event.contentOffset.y;
      const maxScroll = event.contentSize.height - event.layoutMeasurement.height; // Calculate max scroll distance

      // Determine scroll direction: -1 means up, 1 means down
      if (currentScrollY > lastScrollY.value) {
        direction.value = 1; // Scrolling down
        isBottomReached.value = currentScrollY >= maxScroll; // Check if the bottom is reached
      } else if (currentScrollY < lastScrollY.value) {
        direction.value = -1; // Scrolling up
        isBottomReached.value = true; // If scrolling up, bottom is no longer reached
      }

      // Show or hide the navbar based on scroll direction and bottom reached state
      if (direction.value === 1 && !isBottomReached.value) {
        // Scrolling down and not at the bottom, keep navbar visible
        translateY.value = withTiming(0, { duration: 200 });
      } else if (direction.value === -1 || isBottomReached.value) {
        // Scrolling up or bottom reached, hide navbar
        translateY.value = withTiming(-60, { duration: 200 });
      }

      // Update the last scroll position
      lastScrollY.value = currentScrollY;
    },
  });

  // Animated style for the navbar
  const animatedNavBarStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <HomeStackContext.Provider value={{animatedNavBarStyle, scrollHandler}}>
      {children}
    </HomeStackContext.Provider>
  )
}

export default HomeStackProvider