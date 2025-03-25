import './App.css'

export default function Prophet({info}) {
    console.log(info)
    return (
        <div className="prophets">
            <h3>Name: {info.name}</h3>
            <li>Age: {info.age}</li>
            <li>Country: {info.country}</li>
        </div>
    )
};