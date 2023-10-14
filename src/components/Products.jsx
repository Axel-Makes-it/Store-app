import React, { useEffect, useState } from "react";
import rating from "../images/rating.png";
import "../styles/Products.css";

function Products() {
  const [productCatalog, setProductCatalog] = useState([]);
  const [productPrices, setProductPrices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStripeProducts = async () => {
      try {
        const stripe = require("stripe")(
          "sk_test_51O0skUFPnYhR6Lx4QS2r0DXcqJ0xZWmPTGiyyJiAgDnqtYrXN4966fOZ5mV7eRnRpmkRygjTF5OusLaehQUgbYhJ00RPaCMosc"
        );
        const products = await stripe.products.list();
        setProductCatalog(products.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products from Stripe:", error);
        setLoading(false);
      }
    };

    fetchStripeProducts();
  }, []);

  useEffect(() => {
    // Fetch product prices and store them in the state
    const fetchProductPrices = async () => {
      const stripe = require("stripe")(
        "sk_test_51O0skUFPnYhR6Lx4QS2r0DXcqJ0xZWmPTGiyyJiAgDnqtYrXN4966fOZ5mV7eRnRpmkRygjTF5OusLaehQUgbYhJ00RPaCMosc"
      );

      const prices = {};
      for (const product of productCatalog) {
        try {
          const price = await stripe.prices.retrieve(product.default_price);
          prices[product.id] = price.unit_amount / 100;
        } catch (error) {
          console.error("Error fetching price:", error);
          prices[product.id] = null;
        }
      }

      setProductPrices(prices);
    };

    if (productCatalog.length > 0) {
      fetchProductPrices();
    }
  }, [productCatalog]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="products__section">
      <h2>shop your all day essentials</h2>
      <div className="products__section-container">
        {productCatalog.map((product) => (
          <div className="products__section" key={product.id}>
            <div className="products__container">
              <img src={product.images[0]} alt={product.name} width={329.95} />
              <h2>{product.name}</h2>
              <div className="products__rating">
                <img src={rating} alt="rating" />
                <p>4.9</p>
              </div>
              <span>
                $
                {productPrices[product.id] !== null
                  ? productPrices[product.id]
                  : "Price not available"}
              </span>
              <button onClick={() => console.log("clicked")}>
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
