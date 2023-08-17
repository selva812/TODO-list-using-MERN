import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.min.css"

import Home from "./Home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Update from "./Update";
function App() {
   
    return (
        <>
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/update/:id" element={<Update/>}></Route>
           </Routes>

        </BrowserRouter>
        </>
      )
    }
export default App;