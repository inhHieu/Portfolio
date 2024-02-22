import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Indicator() {
    return (
        <div className=' absolute bottom-0 left-1/2 -translate-x-1/2 
                        flex flex-col justify-center text-4xl w-min '>
            <p className='  -mb-2 '>So</p>
            <FontAwesomeIcon icon={faAngleDown} />
        </div>
    )
}
