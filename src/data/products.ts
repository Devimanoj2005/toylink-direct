export type Category = "all" | "cars" | "dolls" | "blocks" | "puzzles" | "soft-toys" | "educational";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  badge?: string;
}

export const categories: { value: Category; label: string; emoji: string }[] = [
  { value: "all", label: "All Toys", emoji: "🎪" },
  { value: "cars", label: "Cars & Vehicles", emoji: "🚗" },
  { value: "dolls", label: "Dolls", emoji: "🎎" },
  { value: "blocks", label: "Building Blocks", emoji: "🧱" },
  { value: "puzzles", label: "Puzzles", emoji: "🧩" },
  { value: "soft-toys", label: "Soft Toys", emoji: "🧸" },
  { value: "educational", label: "Educational", emoji: "📚" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Racing Toy Car",
    price: 499,
    description: "High-quality plastic racing car with smooth wheels and vibrant colors.",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400&h=400&fit=crop",
    category: "cars",
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Cuddly Teddy Bear",
    price: 799,
    description: "Soft, huggable teddy bear made with premium plush fabric. Perfect gift!",
    image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=400&h=400&fit=crop",
    category: "soft-toys",
    badge: "Popular",
  },
  {
    id: "3",
    name: "Colorful Building Blocks",
    price: 599,
    description: "100-piece colorful building blocks set for creative play and learning.",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop",
    category: "blocks",
  },
  {
    id: "4",
    name: "Princess Doll Set",
    price: 899,
    description: "Beautiful princess doll with accessories and changeable outfits.",
    image: "https://images.unsplash.com/photo-1613682988402-4012dbc9709e?w=400&h=400&fit=crop",
    category: "dolls",
    badge: "New",
  },
  {
    id: "5",
    name: "Wooden Jigsaw Puzzle",
    price: 349,
    description: "Educational wooden puzzle with colorful animal shapes. Ages 3+.",
    image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400&h=400&fit=crop",
    category: "puzzles",
  },
  {
    id: "6",
    name: "Monster Truck",
    price: 699,
    description: "Big-wheeled monster truck with suspension and realistic engine sounds.",
    image: "https://images.unsplash.com/photo-1581235707960-35f13de9905c?w=400&h=400&fit=crop",
    category: "cars",
  },
  {
    id: "7",
    name: "Learning Tablet",
    price: 1299,
    description: "Interactive kids tablet with ABC, numbers, and fun quizzes.",
    image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&h=400&fit=crop",
    category: "educational",
    badge: "Top Pick",
  },
  {
    id: "8",
    name: "Stuffed Unicorn",
    price: 649,
    description: "Magical rainbow unicorn plush toy. Super soft and adorable!",
    image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=400&h=400&fit=crop",
    category: "soft-toys",
  },
  {
    id: "9",
    name: "STEM Robot Kit",
    price: 1499,
    description: "Build-your-own robot kit that teaches coding basics. Ages 6+.",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=400&fit=crop",
    category: "educational",
    badge: "New",
  },
  {
    id: "10",
    name: "Mega Block Set",
    price: 999,
    description: "250-piece mega construction set with wheels, doors, and figures.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=400&h=400&fit=crop",
    category: "blocks",
  },
  {
    id: "11",
    name: "Baby Doll with Crib",
    price: 1099,
    description: "Realistic baby doll with feeding bottle, crib and blanket set.",
    image: "https://images.unsplash.com/photo-1613682988402-4012dbc9709e?w=400&h=400&fit=crop",
    category: "dolls",
  },
  {
    id: "12",
    name: "3D Dinosaur Puzzle",
    price: 449,
    description: "Build a 3D T-Rex! Fun and educational for all ages.",
    image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400&h=400&fit=crop",
    category: "puzzles",
    badge: "Fun!",
  },
];

export const WHATSAPP_NUMBER = "919876543210"; // Change this to your WhatsApp number
