import React from 'react'

export default function Search() {
  return (
    <section class="container mt-3">
        <h1 >Search User</h1>
        <form action="./getproduct" method="post">
        <input type="text" name="id" placeholder="Enter User Id"/><br/><br/>
        <input type="submit" value="Search" class="btn btn-outline-info"/>
        </form>
     </section>
  )
}
