export default function MyCondition(props) {

    let sum = props.a + props.b;
    if(sum > 10){
        return (
            <h1>I ma graeater than 10</h1>
        )
    }else{
        return (
            <h1>I ma not grteater than 10</h1>
        )
    }

}
