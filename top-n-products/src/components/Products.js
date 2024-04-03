import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid } from '@material-ui/core';
import Product_Card from './Product_Card';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <Container>
      <h1>All Products</h1>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product_Card product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
