import React from "react";
import firebase from './services/firebase';

export default function App() {
    const messagin = firebase.messaging
    return (
        <div>
            Hello World
        </div>
    )
}
