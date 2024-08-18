import { DrawerScreenProps } from "@react-navigation/drawer";

export type DrawerNavigationList = {
  Home: string | any;
  Settings: string | any;
}

export type HomeDrawerProps = DrawerScreenProps<DrawerNavigationList, 'Home'>
export type SettingsDrawerProps = DrawerScreenProps<DrawerNavigationList, 'Settings'>