import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginUser = () => {
    const[data,setData]=useState(
        {
            
            "email": "",
            "password":""
            
        }
    )
    

const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/login",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("success ")
            } else {
                alert("error")
            }
        }
    )
}
    return (
        <div>
           

            <br></br><h3><center><u>LOGIN</u></center></h3><br></br>
            <div className="container">
                <div className="card" >
                    <div class="card-body">

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password"  id="" className="form-control"  name='password' value={data.password} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success" onClick={readValue}>Log In</button>
                                    <p>New User Click Here<Link to="/add">Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginUser