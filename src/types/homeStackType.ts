import { MutableRefObject, SetStateAction } from "react";
import { ScrollHandlerProcessed, SharedValue } from "react-native-reanimated";

export interface homeStackContextProps {
  scrollHandler: ScrollHandlerProcessed<Record<string, unknown>>,
  animatedNavBarStyle: { transform: { translateY: number; } []; },
  scrollOffset: SharedValue<number>
}

export interface homeStackChild {
  children: React.ReactNode;
}