import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./Todolist.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Todolist({text,id}) {
  
   const handledelete=(id)=>{
    axios.delete("http://localhost:5000/delete/"+id)
    .then(result=>{
      console.log(result)
      window.location.reload()})
    .catch(err=>console.log(err))
   }
  return (
    <div className='lis'>
        <div className='todo'>{text}</div>
        <div className='d-flex'>
            <div ><Link to={`/update/${id}`} className="btn btn-success">update</Link></div>
            <button className="btn btn-danger" onClick={()=>handledelete(id)}>Delete</button>
        </div>       
    </div>
  )
}
