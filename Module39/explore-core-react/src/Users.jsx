import { use } from "react"

export default function User({fetchData}) {

    const user = use(fetchData);

    return (
        <div className="card">
            <h3>User: {user.length}</h3>
        </div>
    )
}

