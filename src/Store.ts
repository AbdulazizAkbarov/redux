import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 1, todos: [{ id: 1, name: "Abdulaziz" }] },
  reducers: {
    qoshish: (state) => {
      state.value = state.value + 10;
    },
    ozgartir: (state, { payload }) => {
      state.value = payload;
    },

    addTodo: (state, { payload }) => {
      state.todos = [
        {
          name: payload,
          id: Math.floor(Math.random() * 100),
        },
        ...state.todos,
      ];
    },

    deletTodo: (state, { payload }) => {
      state.todos = state.todos.filter((item) => item.id !== payload);
    },

    editTodo: (state, { payload }) => {
      console.log(payload);

      const a = state.todos.find((i) => i.id === payload.id);
      if (a) {
        a.name = payload.name;
      }
    },
  },
});

export const { qoshish, ozgartir, addTodo, deletTodo, editTodo } =
  counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
