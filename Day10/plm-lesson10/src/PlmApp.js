import React from "react";
import PlmUserState from "./components/PlmUserState";
import PlmUserStateListObject from "./components/PlmUserStateListObject";
import PlmUserEffect1 from "./components/PlmUserEffect1";
export default function PlmApp(){
    return(
        <div className="container border mt-3">
            <h1>React Hook</h1>
            <hr/>
            <PlmUserState />
            <PlmUserStateListObject />
            <PlmUserEffect1/>
        </div>
    )
} 