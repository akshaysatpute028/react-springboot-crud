import React from 'react'

export default function Search() {
  return (
    <section class="container mt-3">
        <h2>Search User</h2>
        <form action="./getproduct" method="post">
        <input type="text" name="id" placeholder="Enter User Id"/><br/><br/>
        <input type="submit" value="Search" class="btn btn-outline-info"/>
        </form>
     </section>
  )
}
