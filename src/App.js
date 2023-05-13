import "./styles/app.scss"
import Navbar from "./components/Nvabar";
import MyCondition from "./components/conditional";
import MyList from "./components/myitem";
export default function App() {
    let myFruits = [
        {id:1, name: 'apple'},
        {id:2, name: 'banna'},
        {id:3, name: 'grapes'},
        {id:4, name: 'orange'},
    ]
  return (
    <main>
     {/*<Navbar/>*/}
       <div className="bg-dark">
           <div className="row">
               <MyList myFruits={myFruits}/>
           </div>
       </div>
    </main>

  );
}
