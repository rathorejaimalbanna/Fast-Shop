import React, { useEffect, useState } from "react";
import ProductCard from "./cards";
import UseValue from "../../contextApi";
import styles from "../../app.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

// Cart component renders the user's cart items
export default function Cart() {
  // Retrieve userData from context
  const { userData } = UseValue();
  // State to store fetched cart items
  const [fetchedCart, setFetchedCart] = useState([]);

  useEffect(() => {
    // Function to fetch cart items
    async function getCartItem() {
      try {
        const querySnapshot = await getDocs(
          collection(db, "cartData", userData.username, "product")
        );
        const cartData = querySnapshot.docs.map((doc) => doc.data());
        setFetchedCart(cartData);
      } catch (error) {
        console.log("Error fetching cart items:", error);
      }
    }
    // Fetch cart items if userData is available
    if (userData.length > 0) {
      getCartItem();
    }
  }, [userData]);

  // Render a message if user is not logged in
  if (userData.length === 0) {
    return (
      <>
        <h2 className={styles.cartHeader}>
          Please login/signup to view your cart items.
        </h2>
      </>
    );
  }

  return (
    <div className={styles.cartDiv}>
      {/* Render cart items or a message if cart is empty */}
      {fetchedCart.length > 0 ? (
        fetchedCart.map((item, id) => <ProductCard item={item} key={id} />)
      ) : (
        <h2 className={styles.noItem}>No item in your cart</h2>
      )}
    </div>
  );
}
