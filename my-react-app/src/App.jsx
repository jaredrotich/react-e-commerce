import Header from "./components/Header";
import Welcome from "./components/Welcome"
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="main-content">
        <Welcome name="I" title="software engineer"/>
     
      </main>
      <Footer />
    </div>
  )
}

export default App