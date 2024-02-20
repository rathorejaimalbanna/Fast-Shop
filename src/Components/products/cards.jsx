import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseValue from '../../contextApi';

// ProductCard component renders a card displaying product information
function ProductCard(props) {
  // Retrieve userData from context
  const { userData } = UseValue();

  // Function to display a toast notification
  const notify = (msg) => toast.success(msg);

  // Function to add item to cart
  function addItem() { 
    // Check if user is logged in
    if (userData.length === 0) {
      alert('Login First !!');
    } else {
      // Call addCart function and display notification
      props.addCart(props.item.name, props.item.image);
      notify("Item added to cart");
    }
  };

  // Function to remove item from cart (placeholder)
  function removeItem() {
    // Display notification
    notify("Item removed from cart");
  }

  return (
    <Card style={{ width: '18rem', margin: '3%' }}>
      {/* Render product image */}
      <Card.Img variant="top" src={props.item.image} style={{ maxHeight: '250px', maxWidth: '100%' }} />
      <Card.Body>
        {/* Render product name */}
        <Card.Title>{props.item.name}</Card.Title>
        {/* Render product description (placeholder) */}
        <Card.Text>
          Perfect buy for you
        </Card.Text>
        {/* Render button for adding/removing from cart */}
        <Button variant="primary" onClick={props.type === "cart" ? removeItem : addItem}>
          {props.type === "cart" ? "Remove from cart" : "Add To Cart"}
        </Button>
        {/* Render toast container for notifications */}
        <ToastContainer />
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
