import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UseValue from '../../contextApi';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../app.module.css";

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
    <Card className={styles.cardsDiv}>
      {/* Render product image */}
      <Card.Img variant="top" src={props.item.image} className={styles.cardImage} />
      <Card.Body>
        {/* Render product name */}
        <Card.Title className={styles.cardTextTitle}>{props.item.name}</Card.Title>
        {/* Render product description (placeholder) */}
        <Card.Text className={styles.cardText}>
          Perfect buy for you
        </Card.Text>
        <Card.Text className={styles.cardText}>
        &#8377; {props.item.price}
        </Card.Text>
        {/* Render button for adding/removing from cart */}
        <Button className={styles.cardButton} variant="primary" onClick={props.type === "cart" ? ()=>{props.remove(props.item.name)} : ()=>{addItem()}}>
          {props.type === "cart" ? "Remove from cart" : "Add To Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
