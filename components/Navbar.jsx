import React from 'react'
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';

export default function Navbar() {
    return (
        <header>
            <div className="nav">
                <div className="brand-logo">
                    <Link href="/">
                        <img className="cursor-pointer" alt="#nam_c logo" src="/namc.png" />
                    </Link>
                </div>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <DarkModeButton/>
                        </li>
                        <li className="nav-list-item">
                            <a href="https://mohaimin95.github.io/" target="_blank">Profile&nbsp;<i className="material-icons">trending_flat</i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
