import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UseValue from '../../contextApi';
import { db } from '../../firebase';
import {doc, deleteDoc} from 'firebase/firestore'

// ProductCard component renders a card displaying product information
function ProductCard(props) {
  // Retrieve userData from context
  const { userData } = UseValue();


  // Function to add item to cart
  function addItem() { 
    // Check if user is logged in
    if (userData.length === 0) {
      alert('Login First !!');
    } else {
      // Call addCart function
      props.addCart(props.item.name, props.item.image);
    }
  };

  // Function to remove item from cart (placeholder)
  function removeItem() {
    // Display notification
    console.log("item removed")
    async function remove()
    {
    await deleteDoc(doc(db, "cartData", userData.username, "product", props.item.name));}
    remove()
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
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
