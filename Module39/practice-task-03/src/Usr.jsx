export default function Usr({usr}) {
    const {name, company, address} = usr;
    
    return (
        <div className="card">
            <h3>Name: {name}</h3>
            <h5>Company Name: {company.name}</h5>
            <p>City: {address.city}</p>
        </div>
    )
}