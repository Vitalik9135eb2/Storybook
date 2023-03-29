import React, {useMemo, useState} from "react";



export default {
    title: "UseMemo"
}


export const Example = () => {

    const  [a, setA] = useState<number>(5)
    const  [b, setB] = useState<number>(5)

    let resultA =1
    let resultB =1

    // for (let i = 1; i <= a; i++){
    //
    //     let fake = 0
    //
    //     while ( fake < 10000000){
    //         fake++
    //         const fakeValue = Math.random()
    //     }
    //     resultA = resultA * i
    // }

    resultA = useMemo(() =>{
        let tempResultA = 1
        for (let i = 1; i <= a; i++){

            let fake = 0

            while ( fake < 10000000){
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA

    }, [a])




    for (let i = 1; i <= b; i++){
        resultB = resultB * i
    }


    return <>

        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

        <hr/>

        <div>
            result A: {resultA}
        </div>


        <div>
            result B: {resultB}
        </div>

    </>


}



const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: string[] }) => {
    console.log("Users")
    return <div>{
        props.users.map((u, i) => <div key={Math.random()}>{u} </div>)
    }</div>
}

const UsersMemo = React.memo(Users)

export const Example2 = () => {
    console.log("example 2")
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(["Minsk", "Vitebsk", "Kiev", "SPB"])

    // const newArrayUsers = users.filter(el => el.indexOf("i") > -1)
    const newArrayUsers = useMemo(() => {
       return  users.filter(el => el.indexOf("i") > -1)
    }, [users])

    return <>
        <button onClick={() => {setCounter(counter+1)}}>+</button>
        <Counter count={counter}/>
        <UsersMemo users={newArrayUsers}/>
    </>

}

