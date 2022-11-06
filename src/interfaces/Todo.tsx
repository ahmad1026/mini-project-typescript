export interface TodoType {
  text: string;
  id: string;
  createdAt: number;
  Done: boolean;
}

export interface TodoSlice {
  FetchTodoStatus: "rejected" | "idel" | "pending";
  AddTodoStatue: "rejected" | "idel" | "pending";
  DeleteStatue: "rejected" | "idel" | "pending";
  todos: TodoType[];
}
