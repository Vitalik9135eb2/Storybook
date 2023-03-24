import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion",
    component: Accordion
};

const callback = action("Header click");
const onClickCallback = action("Item click");


export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={(onClickCallback)}/>

export const UserUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                    items={[
                                                        {title: "Minsk", value: "2kkk"},
                                                        {title: "Vitebsk",value: "20kk"}
                                                    ]}
                                                    onClick={onClickCallback}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={"Mode Users"} collapsed={value} onChange={() => {
        setValue(!value)
    }} items={[
        {title: "Minsk", value: "2kkk"},
        {title: "Vitebsk", value: "20kk"}
    ]} onClick={onClickCallback}/>
}