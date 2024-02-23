import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UseValue from '../../contextApi';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ProductCard component renders a card displaying product information
function ProductCard(props) {
  function notify(msg)
  {toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Zoom,
    });}
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
        <Button variant="primary" onClick={props.type === "cart" ? ()=>{props.remove(props.item.name);notify("item removed from cart")} : ()=>{addItem()}}>
          {props.type === "cart" ? "Remove from cart" : "Add To Cart"}
        </Button>
        <ToastContainer />
        {/* Render toast container for notifications */}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
