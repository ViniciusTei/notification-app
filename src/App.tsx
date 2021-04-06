import React, {useState} from "react";

export default function App() {
    const isTokenFound = true
    
    return (
        <div>
            {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
            {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        </div>
    )
}
