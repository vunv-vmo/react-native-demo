import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
export function useAppNavigation() {
  return useNavigation<NavigationProp>();
}

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
export function useAppRoute<T extends keyof RootStackParamList>() {
  return useRoute<ScreenRouteProp<T>>();
}
