import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.min.css"
import Todolist from "./Todolist";
import { useState ,useEffect} from "react";
import axios from "axios"
function App() {
    const [Activity,setactivity]=useState("")
    const [items,setitems]=useState([])
    useEffect(()=>{
       axios.get("http://localhost:5000/")
        .then((result)=>{setitems(result.data)
         console.log(result)
        })
        .catch(err=>console.log(err))
    },[])
    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/save",{Activity})
        .then(()=>console.log("saved successfully"))
        setactivity("")
    }
    return (
    <div className='container d-flex justify-content-center align-items-center flex-column'>
        <h1>TODO list</h1>
        <form action="" className="form-label d-flex" onSubmit={e=>handlesubmit(e)} >
            <input className="form-control w-8" type="text" placeholder="anything"
               value={Activity}  onChange={(e)=>setactivity(e.target.value)}/>
            <span className="btn btn-success" onClick={e=>handlesubmit(e)}>+</span>
        </form>
        
        <div> {items.map((item)=>{
            return <Todolist text={item.Activity}  key={item._id}/>
        })
        }</div>  
    </div>
      )
    }
export default App;