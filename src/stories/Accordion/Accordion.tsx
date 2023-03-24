import React from "react";

type ItemType ={
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value:any)=> void

}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = (props:AccordionTitlePropsType) => {
    return(
        <h3 onClick={(e) => props.onChange()}>--{props.title}--</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:any)=> void
}

const AccordionBody = (props:AccordionBodyPropsType) => {
    const  items = props.items.map(el => {
      return  <li onClick={()=>{props.onClick(el.value)}} key={Math.random()}>{el.title}</li>
    })
    return <ul>
        {items}
    </ul>
}

export const Accordion = (props:AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

