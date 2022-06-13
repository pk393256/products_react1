import logo from './logo.svg';
import './App.css';
import ProductForm from './document/productForm';
import ProductListing from './document/productListing';

function App() {
  
  return (
    <div className="App">
      <h1>Products</h1>
     <ProductForm />
     <ProductListing />
    </div>
  );
}

export default App;
