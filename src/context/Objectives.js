import React, { createContext, useState, useEffect } from 'react';

export const ObjectivesContext = createContext();

export const ObjectivesProvider = ({children}) => {

    const [objectivesVal, setObjectivesVal] = useState(0);
    const [easterEggsFound, setEasterEggsFound] = useState(0)
    const [statMenu, setStatMenu] = useState(300)
    const [emailSent, setEmailSent] = useState(false)
    const [viewLinkedIn, setViewLinkedIn] = useState(false)
    const [downloadResume, setDownloadResume] = useState(false)
    const [viewProjects, setViewProjects] = useState(false)

    return (
        <ObjectivesContext.Provider value={{statMenu,emailSent,setStatMenu,viewLinkedIn,downloadResume,easterEggsFound,viewProjects,setDownloadResume,setViewLinkedIn,setEmailSent,setViewProjects,setObjectivesVal,objectivesVal,setEasterEggsFound}}>
            {children}
        </ObjectivesContext.Provider>
    )
};
