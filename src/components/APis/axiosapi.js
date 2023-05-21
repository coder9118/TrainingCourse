import axios from "axios";
import {useEffect, useState} from "react"
import MyName from "../nameComponents";

export default function MyApiCall() {
    let [names, setNames] = useState([{"name": "rahul"}]);
    let [count, setCount] = useState(0)

    async function getData() {
        let data = new FormData();
        data.append("name", "name")
        data.append("count", count)
        data.append("id", "uuid")
        let response = await axios.post(`https://api.oyyi.xyz/v1/fake/get`, data); // Get, Post, Delete, Put, Patch, Option
        if (response.status === 200) {
            setNames(response.data)
        }
        else{
            alert(`Error Occurred ${response.data.message}`)
        }
    }

    function getDataSync(){
        let data = new FormData();
        data.append("name", "name")
        data.append("count", count)
        data.append("id", "uuid")
       axios.post(`https://api.oyyi.xyz/v1/fake/get`, data)
           .then((res) => setNames(res.data))
           .catch((e)=>alert(e.message))
    }



    function handleChangeInput(data) {
        setCount(data.target.value)
    }

    return (
        <>
            <h1>Current Item Count is {count}</h1>
            <input className="form-control form-control-lg" type="number" placeholder="Enter the count for data"
                   onChange={handleChangeInput}/>
            <button className="btn btn-primary btn-lg my-3 d-block" onClick={getDataSync}>Call Api</button>

            <h1>List of name Includes</h1>
            <ul className="list-unstyled">
                {names.map((name) => {
                    return <li key={name.id}><h4>{name.name}</h4></li>
                })}
            </ul>
        </>
    )
}


