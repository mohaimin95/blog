import React, { useEffect, useState } from 'react'
import environment from '../environment';

export default function DarkModeButton() {
    let isDarkModeVar = 'isDarkMode';
    let getDarkModeStatus = () => {
        if (typeof localStorage !== "undefined") {
            return localStorage.getItem(isDarkModeVar) === "true";
        }
    };
    let setDarkModeStatus = bool => {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(isDarkModeVar, String(bool) === "true");
        }
    };
    let [isDarkMode, setIsDarkMode] = useState(getDarkModeStatus());
    const toggleDarkMode = () => {
        let darkModeEnabled = getDarkModeStatus();
        setDarkModeStatus(!darkModeEnabled);
        setIsDarkMode(!darkModeEnabled);
        environment.refreshDarkModeSettings();
    }   
    return (
        <div>
            <i title={"Turn "+ (isDarkMode ? "OFF" : "ON") + " Dark Mode"} onClick={toggleDarkMode} className="material-icons cursor-pointer">{isDarkMode ? 'dark_mode' : 'light_mode'}</i>
        </div>
    )
}
