// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; // this is fine here because behnd the scenes redux toolkit has a package that provides us with a clone of the previous state not the state itself
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated : false
}

const authSlice = createSlice({
  name:'auth',
  initialState: initialAuthState,
  reducers : {
    login (state){
      state.isAuthenticated = true
    },
    logout(state){
      state.isAuthenticated = false
    }
  }
})

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     // state.counter++ // never do this it is mutating the existing state
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   // along with the changes in the state we want we have to write all the other states also even if they are treated as it is because this overrides the previous state not merges them

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

 const store = configureStore({
  reducer: {
    counter : counterSlice.reducer,
    auth : authSlice.reducer
  }
 });

 export const counterActions = counterSlice.actions
 export const authActions = authSlice.actions

export default store;
