import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackNavigationList = {
  Onboarding: string | any;
  Login: string | any;
  Register: string | any;
};

export type OnboardingStackProps = NativeStackScreenProps<StackNavigationList, 'Onboarding'>
export type LoginStackProps = NativeStackScreenProps<StackNavigationList, 'Login'>
export type RegisterStackProps = NativeStackScreenProps<StackNavigationList, 'Register'>