import { useState } from 'react'
let defauls = {
    name: "No name",
    age: 0,
    department: ["mechanical", "civil", "conputer", "CA"]
}
function Props({ details = defauls }) {
    let { name, age, department } = details;

    let [size,setSize]=useState(20)
    
    let handleClick=()=>{
        setSize(size+1)
    }

    // let style={
    //     width:`${size}px`,
    //     height:`${size}px`,
    //     borderRadius:"50%",
    //     backgroundColor:"blue"
    // }
    return (
        <div className='App'>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{department}</h1>
            {department.map((value,index)=>
                    <h1 key={index}>{`${index+1} . ${value}`}</h1>
            )}
            <div>{size}</div>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default Props