import React, {useState} from "react";



export default {
    title: "Select",

};

export const CustomSelect = () => {
    const [value, setValue] = useState<boolean>(false)


    const SelectBody = () =>{
      return  <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    }

    return(
        <>
            <div onClick={()=>{setValue(!value)}} >Select title</div>

            {value && <SelectBody/>}
        </>

    )
}
