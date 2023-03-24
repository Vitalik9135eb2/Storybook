import {useRef, useState} from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';


let Input;
export default {
    title: "input"
} as ComponentMeta<typeof Input>;

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {

    const [value, setValue] = useState("")

    const onChangeHandler = (e) => {
        setValue(e.currentTarget.value)
    }

    return <> <input onChange={onChangeHandler}/> - {value} </>
}

export const GetValueControlledInputWithFixedValue = () => {

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

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

export const ControlledSelect = () => {

    const [value, setValue] = useState("")

    const onClickSelectHandler = (e) => {
        setValue(e.currentTarget.value)
    }

    return <> <select value={value} onChange={onClickSelectHandler}>

        <option>none</option>
        <option value={"1"}>Moscow</option>
        <option value={"2"}>Minsk</option>
        <option value={"3"}>Kiev</option>
    </select> </>
}

export const ControlledInputWithFixedValue = () => <input value={"sadsadsaq"}/>

