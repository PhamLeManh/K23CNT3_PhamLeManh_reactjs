import React from "react";
import PlmLoginComp from "./PlmLoginComp";
import PlmLogoutComp from "./PlmLogoutComp";
export default function PlmLoginControl(props){
    var isLoggedIn = props.isLoggedIn;
    var PlmLoginControl = isLoggedIn?<PlmLoginComp/>: <PlmLogoutComp/>;
    return(
        <div>
            {PlmLoginControl}

        </div>
    )
}