import "./App.css"
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
       <Header/>
      <div className="container">
     
        <Form/>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
