import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type BottomTabList = {
  Home: string | any;
  Settings: string | any;
}

export type HomeTabProps = BottomTabScreenProps<BottomTabList, "Home">
export type SettingsTabProps = BottomTabScreenProps<BottomTabList, "Settings">