import { use } from "react";
import Pst from './Post';

export default function Post({fetchPostsData}) {
    const post = use(fetchPostsData);

    return (
        <div className="card">
            <h3>Posts: {post.length}</h3>

            {
                post.map(pst => <Pst key={pst.id} pst={pst}></Pst>)
            }
        </div>
    )
}