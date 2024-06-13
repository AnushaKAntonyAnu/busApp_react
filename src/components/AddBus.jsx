import axios from 'axios'
import React, { useState } from 'react'

const AddBus = () => {
    const[data,setData]=useState(
        {
            "bname":"",
            "route":"",
            "busno":"",
            "dname":""
           
        }
    
)
const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfully add")
            } else {
                alert("error")
            }
        }
    )
}
return (
<div>
    {/* <NavBar/> */}
    <br></br><h3><u><center>Add Bus</center></u></h3><br></br>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Bus Name</label>
                        <input type="text" className="form-control" name='bname' value={data.bname} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Route</label>
                        <input type="text" className="form-control" name='route' value={data.route} onChange={inputHandler} />
                    </div>
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="from-label">Bus No</label>
                        <input type="text" className="form-control" name='busno' value={data.busno} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Driver Name</label>
                        <input type="text" className="form-control" name='dname' value={data.dname} onChange={inputHandler}/>
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><button className="btn btn-success" onClick={readValue}>Submit</button></center>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default AddBus