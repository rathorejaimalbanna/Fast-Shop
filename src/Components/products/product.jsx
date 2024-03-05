import React, { useEffect, useState } from 'react';
import ProductCard from './cards';
import { db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import UseValue from '../../contextApi';
import { data } from '../../productData';
import styles from '../../app.module.css'


// Product component fetches and renders product data
export default function Product() {
  // State to store fetched product data
  const [docs, setDocs] = useState([]);
  // Retrieve userData and filter from context
  const { userData } = UseValue();
  const { filter,setFilter,dependency } = UseValue();
  useEffect(()=>{setFilter([])},[setFilter])

  useEffect(() => {
        let fetchedDocs = data
        console.log(filter)
        // Filter product data based on filter
        if (filter.length > 0) {
          fetchedDocs = fetchedDocs.filter((item) => filter.includes(item.category));
        }
        // Update state with filtered product data
        setDocs(fetchedDocs);

  }, [filter,dependency]);

  // Function to add item to cart
  function addCart(name, image, price) { 
    async function addItem() {
      // Add item to cartData collection in Firestore
      await setDoc(doc(db, "cartData", userData.username, "product", name), {
        name, image, price
      });
    }
    // Call addItem function
    addItem();
  }

  // Render loading message if product data is not available
  if (docs.length === 0) {
    return (<><h2>Loading.....</h2></>);
  }

  return (
    <>
      {/* Render ProductCard for each product */}
      <div className={styles.outerCardDiv}>
      {docs.map((item, id) => 
        <ProductCard key={id} item={item} addCart={addCart} type="product"/>
      )}
      </div>
    </>
  );
}
