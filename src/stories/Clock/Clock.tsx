import React, {useEffect, useState} from "react";

type PropsType ={

}
export const Clock = (props:PropsType) => {
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

    return(
        <div>
            <span>{hoursString}</span>:
            <span>{minutesString}</span>:
            <span>{secondsString}</span>
        </div>
    )
}