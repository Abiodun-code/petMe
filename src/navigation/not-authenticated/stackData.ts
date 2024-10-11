import Onboarding from "@/screens/not-authenticated/onboarding";
import SignIn from "@/screens/not-authenticated/sign-in";
import SignUp from "@/screens/not-authenticated/sign-up";
import { NOT_AUTHENTICATED__PATH } from "@/types/index";

export const NOT_AUTHENTICATED_STACK = [
  {
    id: 0,
    name: NOT_AUTHENTICATED__PATH.Onboarding,
    screen: Onboarding
  },
  {
    id: 1,
    name: NOT_AUTHENTICATED__PATH.SignIn,
    screen: SignIn
  },
  {
    id: 2,
    name: NOT_AUTHENTICATED__PATH.SignUp,
    screen: SignUp
  }
]