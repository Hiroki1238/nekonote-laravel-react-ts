export interface TaskProps {
  tasks: any;
}

export type Task{
  id: number;
  item: Item;
  user: User;
  description: string;
  deadline: Date;
}

type Item {
  id: number;
  name: string;
  image_path: string;
}

type User {
  id: number;
  user_name: string;
}