import React, {useMemo, useState} from "react";

export default {
    title: "UseState"
}


function generationData(){
    console.log("genetration data")
    return 1
}

export const Example1 = () => {

    console.log("Example 1")

    // const startValue = generationData() // 1

    // const startValue = useMemo(generationData, []) //2
    // const [counter, setCounter] = useState(startValue) //1 and 2

    // const [counter, setCounter] = useState(generationData) // 3

    const [counter, setCounter] = useState(generationData)


    return(

        <>
            {/*/!*<button onClick={() => setCounter(counter +1)}>+</button>*!/ //3*/}

            <button onClick={() => setCounter(state => state + 1)}>+</button>

            <div>{counter}</div>
        </>
    )
}




