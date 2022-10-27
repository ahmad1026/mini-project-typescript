export interface TodoType {
  text: string;
  id: string;
  createdAt: number; 
  Done: boolean;
}

export interface TodoSlice {
  AddStatue: "rejected" | "idel" | "pending";
  DeleteStatue: "rejected" | "idel" | "pending";
  todos: TodoType[];
}

export interface Animate {
    animate:object,
    transition:object
}


