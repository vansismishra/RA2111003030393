import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@material-ui/core';

function Product_Details({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = match.params.id;
    axios.get(`/api/product/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [match.params.id]);

  if (!product) return <Container>Loading...</Container>;

  return (
    <Container>
      <Typography variant="h2">{product.name}</Typography>
      <Typography variant="h6" color="textSecondary">Company: {product.company}</Typography>
      <Typography variant="h6" color="textSecondary">Category: {product.category}</Typography>
      <Typography variant="h6" color="textSecondary">Price: ${product.price}</Typography>
      <Typography variant="h6" color="textSecondary">Rating: {product.rating}</Typography>
      <Typography variant="h6" color="textSecondary">Discount: {product.discount}%</Typography>
      <Typography variant="h6" color="textSecondary">Availability: {product.availability ? 'Available' : 'Out of stock'}</Typography>
    </Container>
  );
}

export default Product_Details;
