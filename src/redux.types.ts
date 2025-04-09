export type TodoType = {
  id: number;
  name: string;
};
export type RootState = {
  counter: { value: number; todos: TodoType[] };
};
