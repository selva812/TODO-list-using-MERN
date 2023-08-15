import {BrowserRouter,Route ,Routes} from "react-router-dom"
import Home from './components/Home';
import Update from "./components/Update";
import Register from "./components/Register";
function App() {
      
    return (
        <>
        <BrowserRouter>
           <Routes> 
           <Route path="/"  element={<Home/>}></Route>  
            <Route path="/register"  element={<Register/>}></Route>
            <Route path="/update/:id"  element={<Update/>}></Route>  
            </Routes>
        </BrowserRouter>
        </>
    );
}
 
export default App;