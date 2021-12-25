import React, { useEffect, useState } from "react";

const CompA = () => {
    const[num , setNum] = useState(1)
    const[name, setName] = useState()

    const getData = async () => {
        const ans = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        const ActualData = await ans.json()
        setName(ActualData.name)
    }   

    useEffect(() =>{
        getData()
    })
    return (
        <>
        <h2>You have selected {num} </h2>
        <h2>Name of the selected pokemon {name} </h2>

         <select value={num} onChange={(e) => {setNum(e.target.value)}} >
             <option value="1">1</option>
             <option value="25">25</option>
             <option value="3">3</option>
             <option value="5">5</option>
             <option value="6">6</option>
         </select>
        </>
    );

}


export default CompA;