import Header from "./components/Header";
import Welcome from "./components/Welcome"
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/UI-elements/Button";
import ProductList from "./components/ProductList";

const products = [
  {
      id: 1,
      name: "Smartphone",
      price: 15000,
      description: "Latest model with 128GB data storage and a triple camera system",
      image: "https://www.pinterest.com/pin/6614730695452071/"
  },
  {
      id: 2,
      name: "Laptop",
      price: 150000,
      description: "HP Victus Brand New Gaming Laptop with a 32GB dedicated graphics card",
      image: "https://www.pinterest.com/pin/25121710417564460/"
  },
  {
      id: 3,
      name: "Smart Watch",
      price: 5000,
      description: "Slick feels good on the wrist. You look elegant while knowing your BMI",
      image: "https://www.pinterest.com/pin/867013365747487991/"
  },
  {
      id: 4,
      name: "Oraimo Wireless Headphones",
      price: 25000,
      description: "The bass sounding is so dynamic",
      image: "https://www.pinterest.com/pin/804244445991076218/"
  },
  {
      id: 5,
      name: "Playstation 5",
      price: 65000,
      description: "Enjoy the gaming experience of your life with this 2TB SSD gaming monster",
      image: "https://www.pinterest.com/pin/122723158589412162/"
  },
]

const App = () => {
  return (
    

    <Navbar >
      <main className="main-content">
        <Welcome name="Jared" title="software engineer"/>
        <ProductList products={products} />
        <div className="button-container">
           <Button
           text="Click Me"
             color="blue"
             onClick={() => alert('Button Clicked!')}
             />
           <Button
             text="Click Me"
             color="green"
             onClick={() => alert('Button Clicked!')}
           />
         </div>
      </main>
      <Footer />
    </Navbar>
  );
}

export default App