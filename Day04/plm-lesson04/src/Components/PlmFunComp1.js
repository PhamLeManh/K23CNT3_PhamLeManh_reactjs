import React from "react"
export default function PlmFunComp1(Props){
    return(
        <div>
            <h2>Props is Object</h2>
            <p><b>Info:</b></p>
            <p>fullname:{Props.renderInfo.fullname}</p>
            <p>age:{Props.renderInfo.age}</p>
            <p>phone:{Props.renderInfo.phone}</p>
            
        </div>
    )
}