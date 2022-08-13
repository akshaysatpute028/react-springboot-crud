import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import UserService from '../service/UserService'

export default function AddUserComponent() {
    const[id,setId]=useState()
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState()
    const[address,setAddress]=useState('')

    const {userId}=useParams();

    const navigate=useNavigate();
    const saveOrUpdateUser=(e)=>{
        e.preventDefault()
        const user={id,firstName,lastName,email,phone,address}
        if(userId){
            UserService.updateUser(userId,user).then(response=>{
                navigate("/users")
            }).catch(err => console.log(err))
        }
        else{
            UserService.createUser(user).then(response=>{
                navigate("/users")
            }).catch(err => console.log(err))
        }

    }

    useEffect(() => {
        UserService.findUserById(userId).then((response)=>{
            setId(response.data.id)
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.setEmail)
            setPhone(response.data.setPhone)
            setAddress(response.data.setAddress)
        }).catch(err=> console.log(err))
    }, [])
    
    const title=()=>{
        if(userId){
            return <h2>Update User</h2>
        }
        else{
            return <h2>Add User</h2>
        }
    }

    return (
        <section class="container p-5 my-5 bg-light">
        {title()}
            <form action="/addproduct" method="post">
                <div className="row">
                    <div className="col input-group">
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" name="id" placeholder="Enter User Id"
                        value={id}
                        onChange={(e)=>setId(e.target.value)} required/>
                    </div>
                    <div className="col input-group">
                        <span className="input-group-text">First Name</span>
                        <input type="text" className="form-control" name="firstName" placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)} required/>
                    </div>
                </div><br/>
                <div className="row">
                    <div className="col input-group">
                        <span className="input-group-text">Last Name</span>
                        <input type="text" className="form-control" name="lastName" placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)} required/>
                    </div>
                    <div className="col input-group">
                        <input type="text" className="form-control" name="email" placeholder="Enter Email Id"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} required/>
                        <span className="input-group-text">@gmail.com</span>
                    </div>
                </div><br/>
                <div className="row">
                    <div className="col input-group">
                        <span className="input-group-text">+91</span>
                        <input type="text" className="form-control" name="phone" placeholder="Enter Contact Number"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)} required/>
                    </div>
                    <div className="col input-group">
                        <span className="input-group-text">Address</span>
                        <input type="text" className="form-control" name="address" placeholder="Enter Address"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)} required/>
                    </div>
                </div><br/>
                <input type="submit" onClick={(e)=>saveOrUpdateUser(e)} value="Submit" className="btn btn-success"/>
            </form>
        </section>
    )
}
