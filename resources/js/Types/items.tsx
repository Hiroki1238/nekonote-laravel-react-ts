export interface ItemProps {
  auth: any;
  items: any;
}

export type Item {
  id: number;
  name: string;
  image_path: string;
  description: string;
  stock: number;
  group_id: number;
}
 