import {useState} from "react";

import axios from "axios";
import Loader from "../Loading";

export default function MyEmailComponents() {

    let token = "VBsMg7rGHRYiZI3Ly5u9s5WKuMjiVtt3O9atoTJI";
    let [email, setEmail] = useState("");
    let [validator,setValidator] = useState({});
    let [loading, setLoading] = useState(false)
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleSubmit() {
        let data = new FormData();
        data.append("email", email);
        setLoading(true)
        axios.post("https://api.oyyi.xyz/v1/mail-verifier", data, {
            "headers": {
                "Content-Type": "application/json",
                "accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                setValidator(res.data.data);
            })
            .catch((e) => alert(e))
            .finally(()=> setLoading(false))
    }

    return (
        <>
            <div className="card">
                <div className="card-header bg-primary text-white text-center">
                    <h4>Email Verification App</h4>
                </div>
                <div className="card-body">
                    <div>
                        <input type="email" onChange={handleEmailChange} className="form-control rounded-0 form-control-lg"
                               placeholder="Enter your email Address"/>
                        <button onClick={handleSubmit} className="btn btn-primary my-4 w-100 py-3">Submit</button>
                    </div>
                </div>
            </div>
            {loading && <Loader/>}
            {!loading && <div className="card">
                <div className="card-header">
                    <h3>Email Checked</h3>
                </div>
                <div className="card-body">
                    <h3>Is Devliverable {validator.mail_deliverable ? "Yes" : "No"}</h3>
                    <h3>Is Reachable {validator.reachable ? "Yes" : "No"}</h3>
                    <h3>Username {validator.username}</h3>
                </div>
            </div>}
        </>
    )
}