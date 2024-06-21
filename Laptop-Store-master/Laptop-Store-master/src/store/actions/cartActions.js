import React, { useState, useEffect } from 'react';
import { getTopProducts } from '../services/api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getTopProducts('AMZ', 'Laptop', 10, 1, 10000); // Example request for top 10 laptops on AMZ
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Top Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.productId}>
            <div>Name: {product.productName}</div>
            <div>Company: {product.company}</div>
            <div>Category: {product.category}</div>
            <div>Price: ${product.price}</div>
            <div>Rating: {product.rating}</div>
            <div>Discount: {product.discount}%</div>
            <div>Availability: {product.availability}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
