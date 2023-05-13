export default function MyCard(props){
    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h3>My Fruits at {props.id}</h3>
                </div>
                <div className="card-body">
                    <h1>{props.fruit}</h1>
                </div>
            </div>
        </div>
    )
}