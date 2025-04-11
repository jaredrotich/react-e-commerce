import Header from "./components/Header";
import Welcome from "./components/Welcome"
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/UI-elements/Button";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="main-content">
        <Welcome name="I" title="software engineer"/>
        <div className="button-container">
           <Button 
             text="Click Me"
             color="blue"
             onClick={()=>alert('Button Clicked!')}
           />
           <Button 
             text="Click Me"
             color="green"
             onClick={()=>alert('Button Clicked!')}
           />
         </div>
      </main>
      <Footer />
    </div>
  )
}

export default App