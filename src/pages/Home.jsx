import React from 'react'
import { useParams } from "react-router-dom";

export default function Home() {
  const {p}=useParams();
  console.log(p);

  return (
    <section class="container p-5 my-5 bg-primary text-white">
        <h1> User Management System</h1><br/>
        <h4 class="text-dark"> Made with &#10084; by Akshay!</h4>
    </section>
  )
}
