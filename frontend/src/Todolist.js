import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./Todolist.css"
export default function Todolist({text}) {
   
  return (
    <div className='lis'>
        <div className='todo'>{text}</div>
        <div className='d-flex'>
            <div className="btn btn-success">update</div>
            <div className="btn btn-danger">Delete</div>
        </div>       
    </div>
  )
}
