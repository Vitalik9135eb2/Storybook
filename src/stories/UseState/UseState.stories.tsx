import {useEffect, useMemo, useState} from "react";

export default {
    title: "UseEffect"
}

export const Example1 = () => {

    console.log("Example 1")

    const [counter, setCounter] = useState(1)
    const [secondCounter, setSecondCounter] = useState(2)

    useEffect(()=> {
        console.log("useEffect every render")
    })

    useEffect(()=> {
        console.log("useEffect only first render")
    }, [])

    useEffect(()=> {
        console.log("useEffect first render and every counter change")
    },[counter])


    console.log("Example 3 - will be displayed before all useEffect")


    return(

        <>
            <button onClick={() => setCounter(counter +1)}>+</button>
            <button onClick={() => setSecondCounter(secondCounter +1)}>*</button>
            <div>Number {counter} and Second number {secondCounter}</div>
        </>
    )
}


export const SetTimeOutExample = () => {

    console.log("Set time out Example ")

    const [counter, setCounter] = useState(1)

    const [secondCounter, setSecondCounter] = useState(2)

    useEffect(()=> {

        setInterval(() =>{
            console.log("tick" + counter)
            // setCounter(counter + 1) //dont work
            setCounter(state => state + 1)
        },1000)
    },[])


    return(

        <>
            <div>Number {counter} and Second number {secondCounter}</div>
        </>
    )
}