import * as React from 'react';

export default {
    title: "Accordion",
} ;

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
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

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export const Accordion = (props:AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}


export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={() => {}}/>