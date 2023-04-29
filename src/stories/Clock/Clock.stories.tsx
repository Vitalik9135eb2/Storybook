import React, {useState} from "react";
import {Clock} from "./Clock";


export default {
    title: "Clock",
    component: Clock
}

export const BaseExampleAnalog = () => {

    return <Clock mode={"analog"}/>
}


export const BaseExampleDigital = () => {

    return <Clock mode={"digital"}/>
}