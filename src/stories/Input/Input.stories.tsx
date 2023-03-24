import {useRef, useState} from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';


export default {
    title: "input"
}

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {

    const [value, setValue] = useState("")

    const onChangeHandler = (e:any) => {
        setValue(e.currentTarget.value)
    }

    return <> <input onChange={onChangeHandler}/> - {value} </>
}

export const GetValueControlledInputWithFixedValue = () => {

    const [value, setValue] = useState("")
    const inputRef = useRef<any>(null)

    const onClickBtnHandler = () => {
        setValue(inputRef.current.value)
        inputRef.current.value = ""
    }

    return <> <input ref={inputRef}/>
        <button onClick={onClickBtnHandler}>Save</button>
        actual value - {value} </>
}

export const ControlledCheckbox = () => {

    const [value, setValue] = useState(true)
    const onClickCheckBoxHandler = () => {
        setValue(!value)
    }

    return <> <input type={"checkbox"} checked={value} onChange={onClickCheckBoxHandler}/>  </>
}


export const ControlledInputWithFixedValue = () => <input value={"sadsadsaq"}/>

