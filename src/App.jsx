import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Bcard from "./components/Bcard";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState({});

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  };

  useEffect(() => fetchProducts, []);

  return (
    <>
      <h1 className="text-center py-2">Bootstrap Cards</h1>
      <main>
        {products.length &&
          products.map((product) => (
            <Bcard
              key={product.id}
              title={product.title}
              description={product.description}
              src={product.thumbnail}
              price={product.price}
              brand={product.brand ? product.brand : "No brand"}
            />
          ))}
      </main>
    </>
  );
};

export default App;
