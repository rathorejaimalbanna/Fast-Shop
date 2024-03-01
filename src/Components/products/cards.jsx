import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UseValue from '../../contextApi';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// ProductCard component renders a card displaying product information
function ProductCard(props) {

  // Retrieve userData from context
  const { userData } = UseValue();


  // Function to add item to cart
  function addItem() { 
    // Check if user is logged in
    if (userData.length === 0) {
      alert('Please Login First !!');
    } else {
      // Call addCart function
      props.addCart(props.item.name, props.item.image, props.item.price);
      toast.success("Item added to cart")
    }
  };


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
        <Card.Text>
        &#8377; {props.item.price}
        </Card.Text>
        {/* Render button for adding/removing from cart */}
        <Button variant="primary" onClick={props.type === "cart" ? ()=>{props.remove(props.item.name)} : ()=>{addItem()}}>
          {props.type === "cart" ? "Remove from cart" : "Add To Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
