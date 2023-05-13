import MyCard from "./card";

export default function MyList(props) {
    // let myFruits = ['Apple', 'Banana', 'grapes']
    return (
       <>
               {props.myFruits.map((fruit) => <MyCard id={fruit.id} fruit={fruit.name} />)}
       </>
    )
}

