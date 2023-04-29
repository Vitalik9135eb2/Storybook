import React, {useEffect, useState} from "react";
import './clock.css'

type PropsType = {
    mode: "analog" | "digital"
}
export const Clock = (props: PropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log("Tick")
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    const getTimeString = (num: number) => num < 10 ? "0" + num : num

    const hoursString = getTimeString(date.getHours())
    const minutesString = getTimeString(date.getMinutes())
    const secondsString = getTimeString(date.getSeconds())


    let view

    switch (props.mode) {
        case "analog":
            view = <div className={"clock"}>
                <div className={"analog-clock"}>
                    <div className={"dial seconds"}/>
                    <div className={"dial minutes"}/>
                    <div className={"dial hours"}/>
                </div>
            </div>

            break
        case "digital":
        default:
            view = <div>
                <span>{hoursString}</span>:
                <span>{minutesString}</span>:
                <span>{secondsString}</span>
            </div>
    }

    return (
        <>
            {view}
        </>

    )
}