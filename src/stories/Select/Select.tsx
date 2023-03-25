import React, {useState} from "react";




type SelectTitlePropsType = {
    title: string
    callback: () => void
}

type SelectBodyPropsType = {
    items: string[]
    callback: (value:string) => void
}

type SelectType = {
    title: string
    items: string[]
}


const SelectTitle = (props: SelectTitlePropsType) => {
    return <span  onClick={props.callback}>{props.title}</span>
}

const SelectBody = (props:SelectBodyPropsType) => {
    const items = props.items.map(el => <li onClick={()=>{props.callback(el)} } key={Math.random()}>{el}</li>)
    return(
        <ul>
            {items}
        </ul>
    )
}

export const Select = (props:SelectType) => {
    const [active, setActive] = useState<boolean>(false)

    const [title, setTitle] = useState<string>(props.title)

    const callback = () => {
        setActive(!active)
    }

    const itemCallback = (value:string) =>{
        setTitle(value)
        setActive(!active)

    }

    return(
        <div className="selectWrap">
            <SelectTitle title={title} callback={callback }/>

            {active && <SelectBody items={props.items} callback={itemCallback}/>}
        </div>
    )
}