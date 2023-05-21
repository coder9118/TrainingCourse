import {useEffect,useState} from "react";


export default function EffectHook(){
    let [names,setNames] = useState([])
    // useEffect(()=>{
    //   setTimeout(()=>{
    //       setNames([...names, Date.now()]);
    //   },1000)
    // },[])
    return (
     <h1>My Name {names}</h1>
    )
}

// names = [a, a,b,b,c]

// anohterName = [...names,againname]; [a,b,bm,c,againname]