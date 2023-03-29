import React, {useCallback, useMemo, useState} from "react";


export default {
    title: "UseCallBack"
}
type BooksPropsType = {
    books: string[]
    addBooks: () => void
}

type CounterBookPropsType = {
    count: number
    callBack: () => void
}


const CounterBook = (props: CounterBookPropsType) => {
    return <>
        <button onClick={props.callBack}>+</button>
        <div>{props.count}</div>
    </>
}


const CounterBookMemo = React.memo(CounterBook)

const Books = (props: BooksPropsType) => {
    console.log("Books")
    return <>
        <div>{

            props.books.map((u, i) => <div key={Math.random()}>{u} </div>)
        }</div>

        <button onClick={props.addBooks}>+</button>

    </>


}

const BooksMemo = React.memo(Books)

export const Example2 = () => {
    console.log("ExampleUseCallBack")

    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<string[]>(["JS", "CSS", "HTML", "TS"])

    // const counterCallBack = () =>{
    //     setCounter(counter + 1)
    // }

    const counterCallBack = useCallback(() => {
        setCounter(counter + 1)
    }, [counter])

    // const addBooks = () => {
    //     const newBook = "Angulars" + Math.random()  - ERROR
    //     return setBooks([...books, newBook])
    // }

    const addBooks = useCallback(() => {
        const newBook = [...books, "Angulars" + Math.random()]
        setBooks(newBook)
    }, [books])

    // const newArrayBooks = books.filter(el => el.indexOf("i") > -1) - ERROR!!!!!!!!!!!!!!!!!

    const newArrayBooks = useMemo(() => {
        return books.filter(el => el.toLowerCase().indexOf("s") > -1)
    }, [books])

    return <>
        <CounterBookMemo count={counter} callBack={counterCallBack}/>
        <BooksMemo books={newArrayBooks} addBooks={addBooks}/>
    </>

}

