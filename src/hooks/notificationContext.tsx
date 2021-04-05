import React, {createContext, useReducer} from 'react';

export const NotificationContext = createContext(null);

export const NotificationProvider = (props: any) => {

    const notifications: NotificationType[] = [
        {
            id: 0,
            type: 'SUCCESS',
            title: 'Successfuly feched data'
        }
    ]
    return (
        <NotificationContext.Provider value={props}>
            {props.children}
        </NotificationContext.Provider>
    );
}

type NotificationType = {
    id: number;
    type: string;
    title: string;
}