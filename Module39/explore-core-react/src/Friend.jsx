export default function Frnd({frnd}) {
    const {name, email} = frnd;

    return (
        <div className="card">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    )
}
