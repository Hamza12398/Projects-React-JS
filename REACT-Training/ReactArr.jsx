import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "PIZZA",
    count: 1,
  },
  {
    id: 1,
    name: "TACOS",
    count: 5,
  },
  {
    id: 2,
    name: "PANINI",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function addMenu(productId) {
    const newPro = products.map((product) => {
      if (product.id === productId) {
        return {...product, count: product.count + 1}
      } else return product;
    });
    setProducts(newPro)
  }
  function handleReamoveClick(productId) {
    let newProducts = [];
    for (let product of products) {
      if (product.id === productId) {
        if (product.count > 1) {
          let newProduct = {
            ...product,
            count: product.count - 1,
          };
          newProducts.push(newProduct);
        }
      } else {
        newProducts.push(product);
      }
    }
    setProducts(newProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              addMenu(product.id);
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              handleReamoveClick(product.id);
            }}
          >
            -1
          </button>
        </li>
      ))}
    </ul>
  );
}
