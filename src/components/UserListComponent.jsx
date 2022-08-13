import UserService from '../service/UserService'
import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserListComponent = () => {

    const [users,setUsers]=useState([])

    useEffect(() => {
      fetchAllUsers()
    }, [])

    const fetchAllUsers = () => { 
      UserService.getAllUsers().then((response)=>{
        setUsers(response.data)
        console.log(response.data);
      }).catch(err=>{console.log(err);})
    }

    const navigate=useNavigate();
    const deleteEmployee=(id)=>{
      UserService.deleteUser(id)
      .then(()=>{
        navigate("/users")
        fetchAllUsers()})
      .catch(err=>console.log(err))
    }

  return (
    <section className="container mt-3">
    <h2>All Users <Link to="/add-user" className="btn btn-outline-success">Add User +</Link></h2>
    <table className="table table-striped table-bordered table-sm table-hover">
    <thead className="table-info">
    <tr>
    <th>User Id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email Id</th>
    <th>Phone</th>
    <th>Address</th>
    <th colSpan="2">Action</th>
    </tr>
    </thead>
    <tbody>
        {
            users.map(
                user=>
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td> 
                <td>{user.address}</td>
                <td><Link  to={`/edit/${user.id}`} className="btn btn-outline-primary">Edit</Link></td>
                <td><button onClick={()=>deleteEmployee(user.id)} className="btn btn-outline-danger">Delete</button></td>
              </tr>
            )
        }
    </tbody>
</table>
</section>
  )
}

export default UserListComponent