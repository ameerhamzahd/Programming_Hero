export default function FooD({ foodName, isAvailable, price = 5 }) {
    const contentStyle = {
        color: 'red',
        fontSize: '20px',
    };

    if (isAvailable) {
        return (
            <div style={contentStyle}>
                <p>Food Name: {foodName}</p>
                <p>Price: ${price}</p>
            </div>
        )
    }

    return (
        <div style={contentStyle}>
            <p>Food Name: {foodName}</p>
        </div>
    )


    // Tenary Operation:

    // return isAvailable ?
    //     <div style={contentStyle}>
    //         <p>Food Name: {foodName}</p>
    //         <p>Price: ${price}</p>
    //     </div>
    //     :
    //     <div style={contentStyle}>
    //         <p>Food Name: {foodName}</p>
    //     </div>


    // Conditional Rendering: 04

    // return isAvailable &&
    //     <div style={contentStyle}>
    //         <p>Food Name: {foodName}</p>
    //         <p>Price: ${price}</p>
    //     </div>


    // Conditional Rendering: 05

    // return isAvailable ||
    //     <div style={contentStyle}>
    //         <p>Food Name: {foodName}</p>
    //     </div>


    // Conditional Rendering: 06
    
    // let contentList;

    // if (isAvailable) {
    //     contentList = (
    //         <div style={contentStyle}>
    //             <p>Food Name: {foodName}</p>
    //             <p>Price: ${price}</p>
    //         </div>
    //     )
    // }
    // else {
    //     contentList = (
    //         <div style={contentStyle}>
    //             <p>Food Name: {foodName}</p>
    //         </div>
    //     )
    // }

    // return contentList;
}