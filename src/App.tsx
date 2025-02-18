import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Members';
import Footer from './components/Footer';
import { Member } from './types/Member';

const products: Member[] = [
  { title: "Product 1", name: "Name 1", description: "Description 1", image: "../src/assets/images/Product.webp" },
  { title: "Product 2", name: "Name 2", description: "Description 2", image: "../src/assets/images/Product.webp" },
  { title: "Product 3", name: "Name 3", description: "Description 3", image: "../src/assets/images/Product.webp" },
  { title: "Product 4", name: "Name 4", description: "Description 4", image: "../src/assets/images/Product.webp" },
  { title: "Product 5", name: "Name 5", description: "Description 5", image: "../src/assets/images/Product.webp" },
  { title: "Product 6", name: "Name 6", description: "Description 6", image: "../src/assets/images/Product.webp" },
  { title: "Product 7", name: "Name 7", description: "Description 7", image: "../src/assets/images/Product.webp" },
  { title: "Product 8", name: "Name 8", description: "Description 8", image: "../src/assets/images/Product.webp" },
  { title: "Product 9", name: "Name 9", description: "Description 9", image: "../src/assets/images/Product.webp" },
  { title: "Product 10", name: "Name 10", description: "Description 10", image: "../src/assets/images/Product.webp" },
  { title: "Product 11", name: "Name 11", description: "Description 11", image: "../src/assets/images/Product.webp" },
  { title: "Product 12", name: "Name 12", description: "Description 12", image: "../src/assets/images/Product.webp" }
];

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Products members={products} />
      <Footer />
    </div>
  );
}

export default App;
