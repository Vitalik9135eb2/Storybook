import React, {useState} from "react";

export default {
    title: "React memo demo"
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: string[] }) => {
    console.log("users update")
    return <div>{
        props.users.map((u, i) => <div key={Math.random()}>{u} </div>)
    }</div>
}

const UsersMemo = React.memo(Users)

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(["Minsk", "Vitemsk", "Kiev"])


    return <>
        <button onClick={() => {setCounter(counter+1)}}>+</button>
        <Counter count={counter}/>
        <UsersMemo users={users}/>
    </>

}



