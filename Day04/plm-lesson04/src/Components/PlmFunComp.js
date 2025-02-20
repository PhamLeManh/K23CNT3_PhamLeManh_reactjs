import React from "react"
export default function PlmFunComp(Props){
    return(
        <div>
            <h2>Demo:Function Component Props</h2>
            <p>Lay du lieu tu Props de hien thi</p>
            <p>Name: {Props.name}</p>
            <p>Address: {Props.address}</p>
            <p>Company: {Props.company}</p>
            <p>Note: {Props.note}</p>
        </div>
    )
}