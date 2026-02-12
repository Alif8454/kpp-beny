export interface Product {
  id: string;
  name: string;
  category: 'tumbler' | 'shirt' | 'mug';
  price: number;
  image: string;
  description: string;
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}