import { use } from "react"
import Usr from "./Usr"

export default function User({user}) {
    const userData = use(user);
    
    return (
        <div className="card">
            <h3>Users: {userData.length}</h3>

            {
                userData.map((usr) => <Usr usr={usr}></Usr>)
            }
        </div>
    )
}