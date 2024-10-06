import { router, useSegments } from "expo-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { loadUserFromStorage } from "./registerSlice";

export const useProtectedRoute = () => {
  const isAuth = useSelector((state: RootState) => state.register.isAuthenticated)

  console.log("user Auth is", isAuth)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage()); // Dispatch checkLoginStatus action when the component mounts
  }, [dispatch]);

  const segments = useSegments()[0] === "(not-authenticated)"

  useEffect(() => {
    // if(isAuth === true) return;

    if (isAuth && !segments) {
      router.replace("/(not-authenticated)");
    } else if (!isAuth && segments) {
      router.replace("/(authenticated)/home");
    }
  }, [isAuth, segments]);
}