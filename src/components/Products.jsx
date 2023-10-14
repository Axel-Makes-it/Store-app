import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import rating from "../images/rating.png";
import "../styles/Products.css";

const firebaseConfig = {
  apiKey: "AIzaSyB-OuZNK8KQyKPEMYFb_9XjR7wJStPvQfk",
  authDomain: "hydrant-stripe.firebaseapp.com",
  projectId: "hydrant-stripe",
  storageBucket: "hydrant-stripe.appspot.com",
  messagingSenderId: "128074610329",
  appId: "1:128074610329:web:09d76ffbb8d55b1f36aa08",
  measurementId: "G-W2TYGGFD9E",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Products() {
  const [productCatalog, setProductCatalog] = useState([]);

  useEffect(() => {
    const fetchStripeProducts = async () => {
      try {
        const stripe = require("stripe")(
          "sk_test_51O0skUFPnYhR6Lx4QS2r0DXcqJ0xZWmPTGiyyJiAgDnqtYrXN4966fOZ5mV7eRnRpmkRygjTF5OusLaehQUgbYhJ00RPaCMosc"
        );
        const products = await stripe.products.list();
        setProductCatalog(products.data);
      } catch (error) {
        console.error("Error fetching products from Stripe:", error);
      }
    };

    fetchStripeProducts();
  }, []);

  return (
    <section className="products__section-container">
      {productCatalog.map((product) => (
        <div className="products__section" key={product.id}>
          <div className="products__container">
            <img src={product.images[0]} alt={product.name} width={329.95} />
            <h2>{product.name}</h2>
            <p>
              <img src={rating} alt="rating" />
              <p>4.9</p>
            </p>
            <span>${product.metadata.price}</span>
            <button onClick={() => console.log("clicked")}>ADD TO CART</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;
