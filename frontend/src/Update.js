import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from "react-router-dom"
export default function Update() {
  const {id}=useParams()
  const [Activity,setactivity] =useState()
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:5000/get/"+id)
    .then(result=>{setactivity(result.data.Activity)
    console.log(result)})  
    .catch(err=>console.log(err))
  },[])
  const handleclick=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:5000/update/'+id,{Activity})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    navigate("/")
  }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 flex-column'>
        <h1>Update </h1>
        <form action="" className="form-label d-flex" onSubmit={(e)=>handleclick(e)}>
            <input type="text" className="form-control" value={Activity} 
            onChange={(e)=>setactivity(e.target.value)}/>
            <button className="btn btn-success" onClick={(e)=>handleclick(e)}>+</button>
        </form>
    </div>
  )
}
