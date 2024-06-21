import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error(`Error fetching product ${productId}:`, error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h2>{product.productName}</h2>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}/5</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetail;
