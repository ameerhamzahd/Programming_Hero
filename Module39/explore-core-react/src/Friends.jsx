import { use } from "react"
import Frnd from './Friend';

export default function Friend({friendsPromise}) {
    const friend = use(friendsPromise);

    return (
        <div className="card">
            <h3>Friends: {friend.length}</h3>

            {
                friend.map(frnd => <Frnd key={frnd.id} frnd={frnd}></Frnd>)
            }
        </div> 
    )
}
