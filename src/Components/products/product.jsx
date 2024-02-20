import React, { useEffect, useState } from 'react';
import ProductCard from './cards';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import UseValue from '../../contextApi';

// Product component fetches and renders product data
export default function Product() {
  // State to store fetched product data
  const [docs, setDocs] = useState([]);
  // Retrieve userData and filter from context
  const { userData } = UseValue();
  const { filter } = UseValue();

  useEffect(() => {
    // Function to fetch product data
    async function fetchDdata() {
      try {
        const q = collection(db, "productsData");
        const querySnapshot = await getDocs(q);
        const fetchedDocs = querySnapshot.docs.map((doc) => doc.data());

        let finalData = fetchedDocs;
        // Filter product data based on filter
        if (filter.length > 0) {
          finalData = fetchedDocs.filter((item) => filter.includes(item.category));
        }

        // Update state with filtered product data
        setDocs(finalData);
      } catch (error) {
        console.log("Error occurred:", error);
      }
    }
    // Fetch product data
    fetchDdata();
  }, [filter]);

  // Function to add item to cart
  function addCart(name, image) { 
    async function addItem() {
      // Add item to cartData collection in Firestore
      await setDoc(doc(db, "cartData", userData.username, "product", name), {
        name, image
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
      {docs.map((item, id) => 
        <ProductCard key={id} item={item} addCart={addCart} type="product"/>
      )}
    </>
  );
}
