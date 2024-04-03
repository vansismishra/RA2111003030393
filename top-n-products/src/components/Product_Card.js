import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

function Product_Card({ product }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography color="textSecondary">
          Company: {product.company}
        </Typography>
        <Typography color="textSecondary">
          Category: {product.category}
        </Typography>
        <Typography color="textSecondary">
          Price: ${product.price}
        </Typography>
        <Typography color="textSecondary">
          Rating: {product.rating}
        </Typography>
        <Typography color="textSecondary">
          Discount: {product.discount}%
        </Typography>
        <Typography color="textSecondary">
          Availability: {product.availability ? 'Available' : 'Out of stock'}
        </Typography>
        <Link to={`/product/${product.id}`}>
          <Button variant="contained" color="primary">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default Product_Card;
