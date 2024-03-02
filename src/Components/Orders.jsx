import React, { useEffect, useState } from "react";
import styles from "../app.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import UseValue from "../contextApi";

export default function Orders() {
  const [orders,setOrders] = useState([]);
  const {userData} = UseValue();

  useEffect(()=>{
    async function getData(){
    try {
      const querySnapshot = await getDocs(
        collection(db, "orders", userData.username,"orderDetails")
      );
      const orderDetails = querySnapshot.docs.map((doc) => doc.data());
      setOrders(orderDetails);
    } catch (error) {
      console.log("Error fetching cart items:", error);
    }};
  getData()
  },[]);

  return (
    <div className={styles.orders}>
      <h1>Your Orders</h1>
      {orders.map((ord,i)=>(
        <div className={styles.orderTable}>
        <h2>Ordered On:- {ord.date}</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {ord.items.map((item)=>(
              <tr>
              <td>{item.name}</td>
              <td>₹ {item.price}</td>
              <td>1 </td>
              <td>₹ {item.price}</td>
            </tr>
            ))}
            <tr></tr>
          </tbody>
          <tr >
            <th className={styles.td}>Total</th>
            <td></td>
            <td ></td>
            <td>₹ {Number(ord.totalPrice)}</td>
          </tr>
        </table>
      </div>
      ))}
    </div>
  );
}
