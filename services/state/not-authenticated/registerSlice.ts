import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

export const createAccount = createAsyncThunk('auth/createAccount', async({email, password, username}, {rejectWithValue})=>{
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);

    // Update user profile with the username
    await userCredential.user.updateProfile({
      displayName: username,
    });

    // Save user data to Firestore
    await firestore().collection('users').doc(userCredential.user.uid).set({
      username,
      email,
    });

    return userCredential.user; // Return the user data for potential further use
  } catch (error) {
    return rejectWithValue(error.message); // Reject with error message
  }
}
})

const registerSlice = createSlice({
  name: "register",
  initialState:{
    isLoading: false,
    error: false,
    token: null,
    user: null,
  },
  reducers:{
    logoutUser: (state)=>{
      state.isLoading = false;
      state.error = false;
      state.token = null;
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
     .addCase("register", (state) => {
        state.isLoading = true;
        state.error = false;
      })
     .addCase("register", (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
     .addCase("register", (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  }
})