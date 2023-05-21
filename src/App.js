import "./styles/app.scss"
import {useState} from "react";
import MyApiCall from "./components/APis/axiosapi";
import MyEmailComponents from "./components/APis/EmailComponents";

export default function App() {
    let [theme, setTheme] = useState("light");
    return (
        <main className={theme}>
            <MyEmailComponents/>
        </main>
    );
}
