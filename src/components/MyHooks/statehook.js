import {useState} from "react"
import Navbar from "../Nvabar"
export default function StateHook(){
    let [current, setCurrent] = useState(Date.now());
    let [theme,setTheme] = useState("dark")
    function changeName(){setCurrent(Date.now);}
    return (
        <>
            <Navbar theme={theme}/>
            <h1 className="text-white">My Name {current}</h1>
            <button className="btn btn-primary" onClick={()=>setTheme(theme==="dark"? "light":"dark") }>Change Theme</button>
        </>
    )
}

//