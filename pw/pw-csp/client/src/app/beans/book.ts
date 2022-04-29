export interface Comment {
  rate: number;
  user: string;
  comment: string;
}

export interface Book {
  id: number;
  name: string;
  author: string;
  price: number;
  description: string;
  category: string;
  isNew: boolean;
  comments: Comment[];
  rating?: number;
}
