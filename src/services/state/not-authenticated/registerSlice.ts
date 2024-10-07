import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";


// Async action to load token from AsyncStorage
export const loadUserFromStorage = createAsyncThunk('auth/loadUser', async (_,{rejectWithValue}) => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token ? { isAuthenticated: true, token } : { isAuthenticated: false };
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const createAccount = createAsyncThunk<any,{email:string, username:string, password:string, rejectWithValue:string}>('auth/createAccount', async({email, password, username}, {rejectWithValue})=>{
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);

    // Update user profile with the username
    await userCredential.user.updateProfile({
      displayName: username,
    });

    // Save user data to Firestore
    await firestore().collection('profile').doc(userCredential.user.uid).set({
      username,
      email,
    });


    console.log('user credential', userCredential.user);
    return userCredential
  } catch (error) {
    return rejectWithValue(error.message); // Reject with error message
  }

})

export const loginUser = createAsyncThunk<any, { email: string, password:string, rejectWithValue: string }>('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);

    const token = await userCredential.user.getIdToken()

    await AsyncStorage.setItem('token', token);

    console.log('user credential', token);
    return userCredential
  } catch (error) {
    return rejectWithValue(error.message); // Reject with error message
  }

})

const registerSlice = createSlice({
  name: "register",
  initialState:{
    isLoading: false,
    error: false,
    token:'',
    isAuthenticated: false, // Assume user is not authenticated initially
  },
  reducers:{
    logoutUser: (state)=>{
      state.isLoading = false;
      state.error = false;
      state.token = '';
      AsyncStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(createAccount.pending, (state)=>{
      state.isLoading = false
    })
    .addCase(createAccount.fulfilled, (state, action: PayloadAction<any>)=>{
      state.isLoading = false
      state.isAuthenticated = true
    })
      .addCase(createAccount.rejected, (state, action: PayloadAction<any>)=>{
      state.error = action.payload
    })
    .addCase(loginUser.pending, (state) => {
      state.isLoading = false
    })
    .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.isAuthenticated = true
      state.token = action.payload
    })
    .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload
    })
      // check login status
      .addCase(loadUserFromStorage.pending, state => {
        state.isLoading = true;
      })
      .addCase(loadUserFromStorage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = action.payload.isAuthenticated;
        state.token = action.payload || null;
      })
      .addCase(loadUserFromStorage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }

})
export default registerSlice.reducer;

export const {logoutUser} = registerSlice.actions